import { adminTypes } from '../types'

const initState = {
  usersData: '',
  rolesData: '',
  merchantsData: '',
  borrowersLists: '',
  planLists: '',
  planPayablePeroid: '',
  adminData: '',
  creditLists: '',
  repaymentData: '',
  borrowersData: '',
  permissionData: '',
  principalOutstandingLists: '',
}

const UserReducer = (state = initState, action) => {
  const { type, data } = action
  switch (type) {
    case adminTypes.altBorrowersData:
      return {
        ...state,
        borrowersData: data,
      }
    case adminTypes.altPermissionData:
      return {
        ...state,
        permissionData: data,
      }
    case adminTypes.altAdminsData:
      return {
        ...state,
        adminData: data,
      }
    case adminTypes.altRoleData:
      return {
        ...state,
        rolesData: data,
      }
    case adminTypes.altPrincipalOutstanding:
      return {
        ...state,
        principalOutstandingLists: data,
      }
    case adminTypes.altRepaymentData:
      return {
        ...state,
        repaymentData: data,
      }
    case adminTypes.altMerchantData:
      return {
        ...state,
        merchantsData: data,
      }
    case adminTypes.altPlanPayablePeroid:
      return {
        ...state,
        planPayablePeroid: data,
      }
    case adminTypes.altCreditsData:
      return {
        ...state,
        creditLists: data,
      }
    case adminTypes.altUsersData:
      return {
        ...state,
        usersData: data,
      }
    case adminTypes.altPlanData:
      return {
        ...state,
        planLists: data,
      }
    case adminTypes.altBorrowersLists:
      return {
        ...state,
        borrowersLists: data,
      }
    default:
      return state
  }
}

export default UserReducer
