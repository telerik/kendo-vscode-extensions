///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import RedirectToBase from '../../core/RedirectToBase';
import { ModuleOneRoutes } from '../ModuleOne/ModuleOneRoutes';
import moduleTwoRoutes from '../ModuleTwo/moduletwo-routes';

const baseRoutes: any = [];

const redirectToBase = [
    { exact: true, component:  RedirectToBase }
];

export const applicationRoutesBase = baseRoutes.concat(
    ModuleOneRoutes,
    moduleTwoRoutes,
    redirectToBase
);
