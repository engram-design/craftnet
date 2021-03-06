import axios from 'axios'

export default {

    /**
     * Axios instance.
     */
    _axios: null,

    /**
     * Returns the axios instance for calls to the Craft API.
     */
    axios() {
        if(!this._axios) {
            this._axios = axios.create({
                baseURL: process.env.VUE_APP_CRAFT_API_ENDPOINT + '/',
                // params: {XDEBUG_SESSION_START: 16433}
            });
        }

        return this._axios;
    },

    /**
     * Get cart.
     */
    getCart(orderNumber, cb, errorCb) {
        this.axios().get('carts/' + orderNumber)
            .then(response => {
                return cb(response.data)
            })
            .catch(response => {
                return errorCb(response)
            })
    },

    /**
     * Create cart.
     */
    createCart(data, cb, errorCb) {
        this.axios().post('carts', data)
            .then(response => {
                return cb(response.data)
            })
            .catch(response => {
                return errorCb(response)
            })
    },

    /**
     * Update cart.
     */
    updateCart(orderNumber, data, cb, errorCb) {
        this.axios().post('carts/' + orderNumber, data)
            .then(response => {
                return cb(response.data)
            })
            .catch(response => {
                return errorCb(response)
            })
    },

    /**
     * Checkout.
     */
    checkout(data) {
        return this.axios().post('payments', data, {
            withCredentials: true,
        })
    },

    /**
     * Reset order number.
     */
    resetOrderNumber() {
        localStorage.removeItem('orderNumber')
    },

    /**
     * Save order number
     */
    saveOrderNumber(orderNumber) {
        localStorage.setItem('orderNumber', orderNumber)
    },

    /**
     * Get order number.
     */
    getOrderNumber(cb) {
        const orderNumber = localStorage.getItem('orderNumber')

        return cb(orderNumber)
    },

}