# seeds.rb

  # This file should contain all the record creation needed to seed the database with its default values.
  # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
  #
  # Examples:
  #
  #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
  #   Character.create(name: 'Luke', movie: movies.first)


  # ** use faker gem?!

  # user1 = User.create(name: 'Tavonia Evans')
  # user2 = User.create(name: 'Changpeng Zhao')
  # user3 = User.create(name: 'Balaji Srinivasan')
  # user4 = User.create(name: 'Katie Haun')
  # user5 = User.create(name: 'Meltem Demirors')
  # user6 = User.create(name: 'Maliha Abidi')

#   { username: 'meltem.demirors' }, 
#   { username: 'tavonia.evans' }, 
#   { username: 'katie.haun' }, 
#   { username: 'balaji.srinivasan' }, 
#   { username: 'changpeng.zhao' }
# 
    # username:, password_digest:



## App.js

# import logo from './logo.svg';
# <img src={logo} className="App-logo" alt="logo" />

# import Login from "./Login";

# function App() {
#   return (
#     <main>
#       <h1>
#         <Link to="/login">Login</Link>
#       </h1>
#     </main>
#   )
# }


# import Login from "./Login";

# function App() {
#   return (
#     <main>
#       <h1>
#         <Link to="/login">Login</Link>
#       </h1>
#     </main>
#   )
# }

# export default App;


# From index.js
# // <React.StrictMode>
# //   <App />
# // </React.StrictMode>,
# // document.getElementById('root')

#   // document.getElementById('root')
# // document.getElementById('root').render(

# // root.render(
# // <BrowserRouter>
# //   <App />
# // </BrowserRouter>
# // )


# From Navbar.js

# import { Link, Route, Switch } from "react-router-dom";
# // import {Link} from 'react-router-dom' // fix

# {/* // return(
#   //   <nav className="nav">
#   //     <h1>Green Beans 🌱</h1> {/* 🌿 */}
#   //     <ul>
#   //       <li>
#   //         <Link to='/'>Wallet</Link>
#   //         Wallet Link
#   //       </li>
#   //       <li>This will be Cryptos link</li>
#   //     </ul>
#   //     </nav>
#   //     // <button onClick={handleLogout}>Logout</button>
  
#   // );
#   // }
#         // <switch>
#         //     <route exact path = "/my-wallet">
#         //       <p>
#         //         My wallet
#         //         <Wallet />
#         //       </p>
#         //     </route>
#         //     <route exact path = "/cryptos">
#         //       <p>
#         //         Cryptos
#         //         <Cryptos />
#         //       </p>
#         //     </route>
  
#             // {/* <route exact path = "/login">
#             //   <p>
#             //     Login
#             //     <Login />
#             //   </p>
#             // </route> */}
  
#             //   {/* <link>Login</link> */}
#           // </switch> */}
  
# <li>
# {/* <Link to='/'>Wallet</Link> */}
# Wallet Link
# </li>
# <li>This will be Cryptos link</li>

# {/* 🌿 */}


# /* .App-logo {
#   height: 40vmin;
#   pointer-events: none;
# }

# @media (prefers-reduced-motion: no-preference) {
#   .App-logo {
#     animation: App-logo-spin infinite 20s linear;
#   }
# } */

# /* .App {
#   text-align: center;
# } */

# /* .App-header {
#   background-color: #282c34;
#   min-height: 100vh;
#   display: flex;
#   flex-direction: column;
#   align-items: center;
#   justify-content: center;
#   font-size: calc(10px + 2vmin);
#   color: white;
# } */

# /* .App-link {
#   color: #61dafb;
# }

# @keyframes App-logo-spin {
#   from {
#     transform: rotate(0deg);
#   }
#   to {
#     transform: rotate(360deg);
#   }
# } */


# /* align-items: center; */
# /* li */

# from Home.js

# const handleLogin = wallet => {
#   console.log('hi from handleLogin in Home.js!')
#   console.log(wallet) // logging obj incorrectly
# }

#Logo (formerly in Navbar)
# <Link to='/' className='logo'>Green🌱Beans</Link>


# From Navbar
# <nav>
#       <h1>Green Beans 🌱</h1> {/* 🌿 */}
#       <ul>
#         <li>
#           <Link to='/'>Home</Link>
#         </li>
#         <li>
#           <Link to='/wallet'>Wallet</Link>
#         </li>
#         <li>
#           <Link to='/cryptos'>Cryptos</Link>
#         </li>
#       </ul>
#     </nav>

#   # 2
#     <nav>
#     <h1>
#       <Link to='/'>Green Beans 🌱</Link>
#     </h1>
#     <Switch>
#       <Route exact path='/'><Home /></Route>
#       <Link to='/wallet'>Wallet</Link>
#       <Link to='/cryptos'>Cryptos</Link>
#     </Switch>
#   </nav>


# <footer>&copy; 2023 Green Beans Inc.</footer>


# from Navbar
#  <button onClick={handleLogout}>Logout (not a toggle)</button>

#  <button>{wallet == null ? "Login (toggle - build functionality)" : "Logout (toggle - build functionality)"}</button>


####### from Navbar cleanup

# {/* Why is Logout btn at bottom? */}
# {/* <button onClick={handleLogout}>Logout (not a toggle)</button> */}

# {/* <button>{wallet == null ? "Login (toggle - build functionality)" : "Logout (toggle - build functionality)"}</button> */}

# {/* toggle - make functional */}


# // onClick={onLoginLogoutClick} 


# // return(
# //   <div>
# //     <h1 className='logo'>Green 🌱 Beans</h1>
# //     <Router>
# //       <nav className="navbar">
# //         {/* make Wallets singular */}
# //         <Link to='/wallet' className='nav-link'>Wallet</Link> 
# //         <Link to='/cryptos' className='nav-link'>Cryptos</Link>
# //         {/* login/logout here? */}
# //         <Link to='/login' className='nav-link'>Login</Link>
# //       </nav>

# //       <Routes>
# //         <Route path='/' element={<Home />} /> {/* remove */}
# //         <Route path='/wallet' element={<Wallet />} /> {/* Make wallet home ( '/' ) */}
# //         <Route path='/cryptos' element={<Cryptos />} />
# //         {/* make Login/Logout toggle */}
# //         <Route path='/login' element={<Login />} /> 
# //         {/* <Route path='*' element={<Error />} />  */}
# //       </Routes>
# //     </Router>

# //     {/* Why is Logout btn at bottom? */}
# //     <button onClick={handleLogout}>Logout</button>

# //   </div>
# // );
