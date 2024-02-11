import { TUser } from "../type/user";

export const sortUserByName = (payload:TUser[]) =>{
    const sortedUser = payload.sort((firstUser,secondUser)=>{
        const firstUserName = firstUser?.firstName.toLowerCase();
        const secondUserName = secondUser?.firstName.toLowerCase();

        if(firstUserName < secondUserName){
            return -1
        }

        if(firstUserName > secondUserName){
            return 1
        }
        return 0
    })

    return sortedUser
}

// sort by email
export const sortUserByEmail = (payload:TUser[]) =>{
    const sortedUser = payload.sort((firstUser,secondUser)=>{
        const firstUserEmail = firstUser?.email.toLowerCase();
        const secondUserEmail = secondUser?.email.toLowerCase();

        if(firstUserEmail < secondUserEmail){
            return -1
        }

        if(firstUserEmail > secondUserEmail){
            return 1
        }
        return 0
    })

    return sortedUser
}

// sort by company name
export const sortUserByCompanyName = (payload:TUser[]) =>{
    const sortedUser = payload.sort((firstUser,secondUser)=>{
        const firstUserCompanyName = firstUser?.company?.name.toLowerCase();
        const secondUserCompanyName = secondUser?.company?.name.toLowerCase();

        if(firstUserCompanyName < secondUserCompanyName){
            return -1
        }

        if(firstUserCompanyName > secondUserCompanyName){
            return 1
        }
        return 0
    })

    return sortedUser
}