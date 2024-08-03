import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function insertUser(username:string, password: string, firstName: string, lastName: string){
    const res = await prisma.user.create({
        data:{
            firstName,
            password,
            lastName,
            email: username,
        }
    })

    console.log(res);
}

insertUser("abhishek9@gmail.com", "1123321", "abhishek", "singh")





// updating user schema

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  
  const resUpdate = await prisma.user.update({
    where:{email:username},
    data:{
        firstName,
        lastName
    }
  })
  console.log(resUpdate)
}

updateUser("abhishek3@gmail.com", {
    firstName: 'AbhishekDon',
    lastName: 'Don'
 })




// delete query

async function getUser(username:string){
    const res = await prisma.user.findFirst({
        where:{
            email: username
        }
    })

    console.log(res);
}

getUser("abhishek3@gmail.com")

