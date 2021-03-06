import authenticateUser from './authenticate-user'
import retrieveUser from './retrieve-user'
import isUserLogged from './is-user-logged'
import retrieveAllArticles from './retrieve-all-articles'
import searchArticles from './search-articles'
import addToCart from './add-to-card'
import retrieveArticle from './retrieve-article'
import removeToCart from './remove-to-card'
import placeOrder from './place-order'
import retrieveAllUserOrders from './retrieve-all-user-orders'
import updateUser from './update-user'
import retrieveCategory from './retrieve-category'
import isUserAdmin from './is-user-admin'
import retrievePendingOrders from './retrieve-pending-orders'
import changeStateOrder from './change-state-order'
import removePendingOrder from './remove-pending-order'
import retrieveAllOrders from './retrieve-all-orders'
import registerUser from './register-user'
import retrieveAllUsers from './retrieve-all-users'
import unregisterUser from './unregister-user'
import wakeUp from './wake-up'
import updateArticle from './update-article'
import removeAllCart from './remove-all-cart'
import fromAdminRetrieveAllUserOrders from './from-admin-retrieve-all-user-orders'
import fromAdminRetrievePendingUserOrders from './from-admin-retrieve-pending-user-orders'
import updateUserEmail from './update-user-email'
import registerArticle from './register-article'
import sendSuggestionsEmail from './send-suggestions-email'

export default {
    set userCredentials({id,token}){
        sessionStorage.token = token
        sessionStorage.id = id
    },
    get userCredentials(){
        return { id: sessionStorage.id , token: sessionStorage.token }
    },
    authenticateUser,
    retrieveUser,
    isUserLogged,
    retrieveAllArticles,
    searchArticles,
    addToCart,
    retrieveArticle,
    removeToCart,
    placeOrder,
    retrieveAllUserOrders,
    updateUser,
    retrieveCategory,
    isUserAdmin,
    retrievePendingOrders,
    changeStateOrder,
    removePendingOrder,
    retrieveAllOrders,
    registerUser,
    retrieveAllUsers,
    unregisterUser,
    wakeUp,
    removeAllCart,
    fromAdminRetrieveAllUserOrders,
    fromAdminRetrievePendingUserOrders,
    updateArticle,
    updateUserEmail, 
    registerArticle,
    sendSuggestionsEmail
}