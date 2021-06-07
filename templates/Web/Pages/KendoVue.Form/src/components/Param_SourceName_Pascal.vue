<template>
  <div class="container-fluid">
            <Dialog v-if="showDialog" @close="toggleDialog">
                <p :style='{ margin: "25px", textAlign: "center" }'>The form is successfully submitted!</p>
                <DialogActionsBar>
                    <button class="k-button" @click="toggleDialog">OK</button>
                </DialogActionsBar>
            </Dialog>
            <div class='row my-4'>
                <FormContainer>
                    <form @submit="onSubmit" class='k-form'>
                        <fieldset>
                            <legend>User Details</legend>
                            <div>
                                 <label class="k-form-field">
                                    <span>First name</span>
                                    <Input :name="'firstName'" v-model="firstName"  :placeholder="'Your Name'"  />
                                </label>
                            </div>
                            <div>
                                 <label class="k-form-field">
                                    <span>Last name</span>
                                    <Input :name="'lastName'" v-model="lastName"  :placeholder="'Your Last Email'"  />
                                 </label>
                            </div>
                            <div>
                                 <label class="k-form-field">
                                    <span>Last name</span>
                                    <datepicker :name="'dateOfBirth'" v-model="dateOfBirth" :placeholder="'Date of Birth'"  />
                                 </label>
                            </div>
                            <div class="k-form-field">
                                <span>Gender</span>
                                    <input type="radio" name="gender" id="female" class="k-radio">
                                    <label class="k-radio-label" for="female">Female</label>
                                    <input type="radio" name="gender" id="male" class="k-radio">
                                    <label class="k-radio-label" for="male">Male</label></div>
                            <div>
                                <div>
                                     <label class="k-form-field">
                                    <span>Email
                                        <span class="k-required">*</span>
                                    </span>
                                    <Input :name="'email'" v-model="email" :type="'email'" :placeholder="'Your Email'" />
                                     </label>
                                    <div v-if="email && validationMessage" class="k-required">{{validationMessage}}</div>
                                </div>
                            </div>
                            <div>
                                 <label class="k-form-field">
                                    <span>Your Company</span>
                                    <Input :name="'company'" v-model="company"/>
                                 </label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Credentials</legend>
                            <div>
                                <label class="k-form-field">
                                    <span>Username</span>
                                    <Input :name="'userName'" :placeholder="'Your username'" v-model="userName" />
                                </label>
                            </div>
                            <div>
                                  <label class="k-form-field">
                                    <span>Password</span>
                                    <Input name="'password'" type="password" :placeholder="'Your password'" v-model="password" />
                                  </label>
                            </div>
                            <div :style='{ marginTop: "1rem" }'>
                                <label class="k-form-field">
                                    <input type="checkbox" id="twoFactor" class="k-checkbox" v-model="twoFactor" /> 
                                <label class="k-checkbox-label" for="twoFactor">Enable two-factor authentication</label></label>
                            </div>
                        </fieldset>

                        <div class="text-right">
                            <button type="button" class="k-button" @click="onFormReset">Clear</button> &nbsp;
                            <button type="submit" class="k-button k-primary">Submit</button>
                        </div>
                    </form>
                </FormContainer>
                <div class='col-12 col-lg-3 mt-3 mt-lg-0'>
                    <h3>Kendo UI for Vue Forms</h3>
                    <p>Kendo UI for Vue includes a wide offering of UI components that can be used to build forms, including CSS classes to easily create and structure gorgeous forms.</p>
                    <p>The required inputs get validated upon form submission and if the validation fails, the form submission is prevented. Out of the box, Kendo UI for Vue delivers components which support the HTML5 form validation and also provide props for configuring a set of minimal requirements for a component to be in a valid state.</p>
                    <p>For documentation and demos of the many form-friendly components please visit their documentation (<a href="https://www.telerik.com/kendo-vue-ui/components/dateinputs/?utm_medium=cpm&utm_source=vscode-app&utm_campaign=kendo-ui-vue-trial-dateinputs">Date Inputs</a>, <a href="https://www.telerik.com/kendo-vue-ui/components/dropdowns/?utm_medium=cpm&utm_source=vscode-app&utm_campaign=kendo-ui-vue-trial-dropdowns">DropDowns</a>, <a href="https://www.telerik.com/kendo-vue-ui/components/inputs/?utm_medium=cpm&utm_source=vscode-app&utm_campaign=kendo-ui-vue-trial-inputs">Inputs</a> etc).</p>
                </div>
            </div>
        </div>
</template>
<script>
import { Input } from '@progress/kendo-vue-inputs';
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import FormContainer from './FormContainer';
import { useForm } from '../functions/useForm';

export default {
     components: {
        Input,
        Dialog,
        DialogActionsBar,
        FormContainer,
        datepicker: DatePicker
     },
    setup () { 

        return {
          ...useForm()
        };
    }
}
</script>
