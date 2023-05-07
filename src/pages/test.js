// import { useSession, signIn, signOut } from "next-auth/react"
// import { getSession } from "next-auth/client"
// import { authOptions } from '../pages/api/auth/[...nextauth]';


// export default function test( {data} ) {
//     const [ session ] = useSession()
//     console.log(session);
//     return (
//         <>
//         {JSON.stringify(data)}
//         </>
//     )
// }

// export async function getServerSideProps(context) {
//     const session = await getSession(context);
//     console.log(session);
//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent:false
//             }
//         }
//     }
//     return {
//         props: {
//             session
//         }
//     }
// }