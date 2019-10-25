import * as React from "react";
import { connect } from "react-redux";

import SelectableCard from "../SelectableCard";
import Title from "../../components/Title";

import styles from "./styles.module.css";
import { MAX_PAGES_ALLOWED } from "../../utils/constants";
import classNames from "classnames";

import { setDetailPageAction } from "../../actions/wizardInfoActions/setDetailsPage";

import { IOption } from "../../types/option";
import { ISelected } from "../../types/selected";
import { Dispatch } from "redux";
import RootAction from "../../actions/ActionType";
import { getSvg } from "../../utils/getSvgUrl";


import { defineMessages} from "react-intl";
import { selectBackendFrameworkAction } from "../../actions/wizardSelectionActions/selectBackEndFramework";
import { thisExpression } from "@babel/types";

const messages = {
  limitedPages: {
    id: "pages.limitedPagesMessage",
    defaultMessage: "You can select up to 20 pages"
  },
  overlimitPages: {
    id: "pages.overlimitPagesMessage",
    defaultMessage: "You cannot add more than 20 pages to the project"
  },
  noPageGeneration: {
    id: "pages.noPageGeneration",
    defaultMessage: "At least 1 page must be selected"
  },
  iconAltMessage: {
    id: "pages.maxPagesText",
    defaultMessage: "Notification"
  }
};


interface ICount {
  [key: string]: number;
}

interface ISelectOptionProps {
  title: string;
  internalName?: string;
  selectCard?: (card: ISelected) => void;
  selectedCardIndices: number[];
  currentCardData?: ISelected[];
  isPagesSelection: boolean;
  selectOptions?: (cards: ISelected[]) => void;
  options: IOption[];
  multiSelect: boolean;
  isFrameworkSelection: boolean;
  cardTypeCount?: ICount;
  handleCountUpdate?: (cardCount: ICount) => any;
}

interface ISelectOptionState {
  selectedCardIndices: number[];
  selectedIndex: number;
  pageOutOfBounds: boolean;
  description: string;
}

interface IDispatchProps {
  setDetailPage: (detailPageInfo: IOption) => void;
}

type Props = IDispatchProps & ISelectOptionProps;

class SelectOption extends React.Component<Props, ISelectOptionState> {
  constructor(props: Props) {
    super(props);
    const { selectedCardIndices } = props;
    this.state = {
      selectedCardIndices,
      selectedIndex: 0,
      pageOutOfBounds: false,
      description: messages.limitedPages.defaultMessage
    };
  }
  public componentDidMount() {
    const {
      selectCard,
      selectOptions,
      options,
      selectedCardIndices
    } = this.props;
    if (selectCard) {
      this.exchangeOption(selectedCardIndices[0]);
      this.setState({
        selectedCardIndices
      });
    } else if (selectOptions) {
      if (selectedCardIndices.length === 0) {
        this.onCardClick(0);
      }
      this.setState({
        selectedCardIndices
      });
    }
  }
  public isCardSelected(cardNumber: number): boolean {
    return cardNumber == this.state.selectedIndex;
  }

  /**
   * Creates a title for the card being selected (e.g. selected Page).
   * Prepends a number of a certain card is selected more than once.
   * Only changes the title of the last card selected.
   *
   * @param selectedCardIndex
   * @param optionIndexContainingData
   * @param count
   * @param cardData
   */
  public createTitle(optionIndexContainingData: number, count: number) {
    const { title } = this.props.options[optionIndexContainingData];
    if (count === 1) {
      return title;
    }
    return `${title}${count}`;
  }

  public mapIndexToCardInfo(
    count: number,
    internalName: string,
    optionIndexContainingData: number
  ) {
    const { defaultName, licenses, author } = this.props.options[
      optionIndexContainingData
    ];
    const title = this.createTitle(optionIndexContainingData, count);

    const cardInfo: ISelected = {
      title: title as string,
      internalName,
      id: title as string,
      defaultName,
      isValidTitle: true,
      description: "",
      licenses,
      author
    };
    return cardInfo;
  }

  /**
   * Allows more than one option to be selected at a time.
   * Updates the redux store with the selection.
   *
   * @param cardNumber
   */
  public addOption(
    cardNumber: number,
    cardCount: number,
    internalName: string
  ) {
    const { selectedCardIndices, currentCardData, selectOptions } = this.props;
    selectedCardIndices.push(cardNumber);
    if (selectOptions && currentCardData) {
      currentCardData.push(
        this.mapIndexToCardInfo(cardCount, internalName, cardNumber)
      );
      selectOptions(currentCardData);
    }
    this.setState({
      selectedCardIndices
    });
  }

  /**
   * Ensures only one option can be selected at a time.
   * Updates the component state and the redux store with selection.
   *
   * @param cardNumber
   */
  public exchangeOption(cardNumber: number) {
    const { selectedCardIndices } = this.state;
    const { selectCard, options } = this.props;
    selectedCardIndices.pop();
    selectedCardIndices.push(cardNumber);
    const shorthandVersionLabel = `v${options[cardNumber].version || "1.0"}`;
    const { title, internalName, licenses, author, longDescription } = this.props.options[
      cardNumber
    ];

    if (selectCard) {
      selectCard({
        internalName,
        title: title as string,
        version: shorthandVersionLabel,
        licenses,
        author,
        description: longDescription as string
      });
    }
    this.setState({
      selectedCardIndices
    });
  }

  public removeOption(internalName: string) {
    const { selectedCardIndices, currentCardData, selectOptions } = this.props;
    if (selectOptions && currentCardData && currentCardData.length > 1) {
      const size = currentCardData.length;
      const currentCards = currentCardData.splice(0);
      for (let i = size - 1; i >= 0; i--) {
        if (currentCards[i].internalName === internalName) {
          currentCards.splice(i, 1);
          break;
        }
      }
      selectOptions(currentCards);
      this.setState({
        selectedCardIndices
      });
    }
  }

  public addPage = () => {
    
    const cardNumber = this.state.selectedIndex;
    const {
      options,
      cardTypeCount,
      handleCountUpdate,
      currentCardData
    } = this.props;
    const { internalName } = options[cardNumber];
    if (currentCardData && currentCardData.length >= MAX_PAGES_ALLOWED) {
      this.setState({
        pageOutOfBounds: true,
        description: messages.overlimitPages.defaultMessage
      });
      return;
    }
    this.setState({
      pageOutOfBounds: false,
      description: messages.limitedPages.defaultMessage
    });
    if (cardTypeCount && handleCountUpdate) {
      cardTypeCount[internalName] = cardTypeCount[internalName]
        ? cardTypeCount[internalName] + 1
        : 1;
      handleCountUpdate(cardTypeCount);
      const { selectedCardIndices, currentCardData, selectOptions } = this.props;
      if (selectOptions && currentCardData) {
        currentCardData.push(
          this.mapIndexToCardInfo(cardTypeCount[internalName], internalName, cardNumber)
        );
        selectOptions(currentCardData);
      }
    }
  };

  public removePage = () => {
    const cardNumber = this.state.selectedIndex;

    const {
      options,
      currentCardData,
      cardTypeCount,
      handleCountUpdate
    } = this.props;
    const { internalName } = options[cardNumber];
    if (currentCardData && currentCardData.length <= 1) {
      this.setState({
        pageOutOfBounds: true,
        description: messages.noPageGeneration.defaultMessage
      });
      return;
    }
    this.setState({
      pageOutOfBounds: false,
      description: messages.limitedPages.defaultMessage
    });
    if (
      cardTypeCount &&
      handleCountUpdate &&
      currentCardData &&
      currentCardData.length > 1
    ) {
      this.removeOption(internalName);
    }
  };

  public onCardClick(cardNumber: number) {
    const {
      options,
      multiSelect,
      cardTypeCount,
      handleCountUpdate
    } = this.props;

    const { unselectable } = options[cardNumber];
    if (unselectable) {
      return;
    }
    if (multiSelect) {
      
    } else {
      this.setState( { selectedIndex: cardNumber });
      if(this.props.isFrameworkSelection) {
        this.exchangeOption(cardNumber);
      }
    }
  }

  /**
   * Returns the number of times that a particular card was selected/clicked on.
   *
   * If card can only be clicked once, this function returns undefined.
   */
  public getCardCount = (internalName: string) => {
    const { selectedCardIndices, options } = this.props;
    if (selectedCardIndices) {
      return selectedCardIndices.reduce((cardCount: number, card: number) => {
        if (options[card].internalName === internalName) {
          return cardCount + 1;
        }
        return cardCount;
      }, 0);
    }
  };

  public getActiveCardCount =() => {
    const { internalName } = this.props.options[this.state.selectedIndex];
    return this.getCardCount(internalName);
  }

  public getActivePageDescription =() => {

    const { options } = this.props;
    return options[this.state.selectedIndex].body;
  }


  public render() {
    const { title, options, setDetailPage, isFrameworkSelection, isPagesSelection } = this.props;
    return (
      <div className={styles["card-inner"]}>
        <h1>{title}</h1>
        <div className={styles.container}>
          {options.map((option, cardNumber) => {
            const { svgUrl, title, body, unselectable, internalName } = option;
            return (
              <SelectableCard
                key={`${cardNumber} ${title}`}
                isFrameworkSelection={isFrameworkSelection}
                isPagesSelection={isPagesSelection}
                onCardClick={(cardNumber: number) => {
                  this.onCardClick(cardNumber);
                }}
                onDetailsClick={setDetailPage}
                option={option}
                cardNumber={cardNumber}
                selected={this.isCardSelected(cardNumber)}
                iconPath={svgUrl}
                iconStyles={styles.icon}
                title={title as string}
                body={body as string}
                disabled={unselectable}
                clickCount={this.getCardCount(internalName)}
              />
            );
          })}
        </div>

      { isPagesSelection && 
        <div className={styles["page-detail-wrap"]}>
          <div className={styles["page-info-wrap"]}>
            <h4>Page description</h4>
            <p>{ this.getActivePageDescription() }</p>
          </div>
          <div className={styles["page-buttons-wrap"]}>
            <button
              className={classNames(styles["button"], styles["button-icon"])}
              onClick={() => this.removePage()}
            >
              {getSvg("minusicon", "icon-class")}
            </button>
            <span className={styles["page-counter"]}>
              { this.getActiveCardCount() }
            </span>
            <button
              className={classNames(styles["button"], styles["button-icon"])}
              onClick={() => this.addPage()}
            >
              {getSvg("plusicon", "icon-class")}
            </button>
          </div>
        </div>
      }
      </div>
    );
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<RootAction>
): IDispatchProps => ({
  setDetailPage: (detailPageInfo: IOption) => {
    dispatch(setDetailPageAction(detailPageInfo));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SelectOption);
