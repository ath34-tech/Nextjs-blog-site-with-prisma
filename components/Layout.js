import Nav from "./Navbar"
import Footer from "./Footer"
export default function Layout({children,content}){
   return(
       <>
        <Nav content={content}/>
       <div>
           <main>
            {children}
           </main>
       </div>
       <Footer/>
       </>
   )
}