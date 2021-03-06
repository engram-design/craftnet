import Vue from 'vue'
import VueRouter from 'vue-router'
import AccountBillingIndex from '../pages/account/billing/index'
import AccountBillingInvoiceNumber from '../pages/account/billing/invoices/_number'
import AccountSettings from '../pages/account/settings'
import BuyPlugin from '../pages/buy-plugin/index'
import BuyCms from '../pages/buy-cms/index'
import Cart from '../pages/cart'
import DeveloperPlugins from '../pages/developer/plugins/index'
import DeveloperPluginsId from '../pages/developer/plugins/_id'
import DeveloperProfile from '../pages/developer/profile'
import DeveloperSalesIndex from '../pages/developer/sales/index'
import DeveloperSettings from '../pages/developer/settings'
import LicensesClaim from '../pages/licenses/claim'
import LicensesCmsId from '../pages/licenses/cms/_id'
import LicensesCmsIndex from '../pages/licenses/cms/index'
import LicensesPluginsId from '../pages/licenses/plugins/_id'
import LicensesPluginsIndex from '../pages/licenses/plugins/index'
import Payment from '../pages/payment'
import ThankYou from '../pages/thank-you'
import PartnerOverview from '../pages/partner/overview'
import PartnerProfile from '../pages/partner/profile'
import NotFound from '../pages/not-found'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    canReuse: false,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 };
    },
    routes: [
        // Redirects

        {
            path: '/',
            redirect: '/licenses',
        },
        {
            path: '/account',
            redirect: '/account/billing',
        },
        {
            path: '/licenses',
            redirect: '/licenses/cms',
        },
        {
            path: '/developer',
            redirect: '/developer/plugins',
        },


        // Pages

        {
            path: '/account/billing',
            name: 'Billing',
            component: AccountBillingIndex
        },
        {
            path: '/account/billing/invoices/:number',
            name: 'AccountBillingInvoiceNumber',
            component: AccountBillingInvoiceNumber
        },
        {
            path: '/account/settings',
            name: 'AccountSettings',
            component: AccountSettings
        },
        {
            path: '/buy-plugin/:handle/:edition',
            name: 'BuyPlugin',
            component: BuyPlugin,
            meta: { layout: "no-sidebar" }
        },
        {
            path: '/buy-cms/:edition',
            name: 'BuyCms',
            component: BuyCms,
            meta: { layout: "no-sidebar" }
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
            meta: { layout: "no-sidebar" }
        },
        {
            path: '/developer/plugins',
            name: 'Plugins',
            component: DeveloperPlugins,
            meta: { stripeAccountAlert: true }
        },
        {
            path: '/developer/add-plugin',
            component: DeveloperPluginsId,
        },
        {
            path: '/developer/plugins/:id',
            name: 'DeveloperPluginsId',
            component: DeveloperPluginsId,
        },
        {
            path: '/developer/sales',
            name: 'DeveloperSalesIndex',
            component: DeveloperSalesIndex,
            meta: { stripeAccountAlert: true }
        },
        {
            path: '/developer/profile',
            name: 'DeveloperProfile',
            component: DeveloperProfile
        },
        {
            path: '/developer/settings',
            name: 'DeveloperSettings',
            component: DeveloperSettings
        },
        {
            path: '/licenses/claim',
            component: LicensesClaim
        },
        {
            path: '/licenses/cms',
            component: LicensesCmsIndex,
            meta: { cmsLicensesRenewAlert: true }
        },
        {
            path: '/licenses/cms/:id',
            component: LicensesCmsId
        },
        {
            path: '/licenses/plugins',
            component: LicensesPluginsIndex,
            meta: { pluginLicensesRenewAlert: true }
        },
        {
            path: '/licenses/plugins/:id',
            component: LicensesPluginsId
        },
        {
            path: '/payment',
            name: 'Payment',
            component: Payment,
            meta: { layout: "no-sidebar" }
        },
        {
            path: '/thank-you',
            name: 'ThankYou',
            component: ThankYou,
            meta: { layout: "no-sidebar" }
        },


        // Partner

        {
            path: '/partner',
            redirect: '/partner/overview',
        },
        {
            path: '/partner/overview',
            name: 'PartnerOverview',
            component: PartnerOverview
        },
        {
            path: '/partner/profile',
            name: 'PartnerProfile',
            component: PartnerProfile
        },


        // Not found
        {
            path: '*',
            name: 'NotFound',
            component: NotFound,
            meta: { layout: "no-sidebar" }
        },
    ]
});

// Renew session when changing route
router.beforeEach((to, from, next) => {
    if (router.app.$refs.authManager) {
        router.app.$refs.authManager.renewSession();
    }

    next();
});

export default router;
