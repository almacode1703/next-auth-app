import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { CredentialsProvider } from 'next-auth/providers/credentials'
import connectMongo from '@/database/conn'
import Users from '@/model/Schema'
import {compare} from 'bcryptjs'

export default NextAuth ({
   providers: [
    // Google Provider
    GoogleProvider({
        clientId : process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
    }),

    // Github Provider
    GithubProvider({
        clientId : process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    // Credential provider
    CredentialsProvider({
      name : "Credentials",
      async authorize(credentials, req){
        try {
            await connectMongo()
        }
        catch(error){
            console.log(error)
        }

        const result = await Users.findOne({email : credentials.email})
        if(!result){
            throw new Error("No User found...")
        }

        // compare()
        const checkPassword = await compare(credentials.password, result.password)
        if((!checkPassword) || (result.email !== credentials.email)){
             throw new Error("Username or Password doesn't match")
        } 
      }
    })
   ]
})