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


# from App.js
# // if (wallet) {
#   //   return <h2>Welcome, Wallet number {wallet.walletKey}!</h2>;
#   // } else {
#   //   return <Login onLogin={setWallet} />;
#   // }

# // <div className="App">
# // </div>


# /////////////////////////////

# // return (
# //   <main>
# //     <Navbar onLogout={logoutWallet} />
# //     if (wallet) {
# //     <h2>Welcome!</h2>
# //     } else {
# //       <Login onLogin={setWallet} />
# //     }
# //   </main>
# // )


# // {/* <h1 className='logo'>Green🌱Beans</h1> */}

# //  <Link to='/' className='logo'>Green🌱Beans</Link>





# from wallets_controller.rb
  # GET /wallet
  def show
    wallet = Wallet.find_by(wallet_key: session[:wallet]) # ?
    if wallet
      render json: wallet, include: :cryptos
    else
      render json: { errors: ['Not authorized'] }, status: :unauthorized
    end
  end


  # from wallets_controller

  #   # GET /wallets/:id # make /wallet (singular)
#   def show
#     wallet = Wallet.find(params[:id])
#     # wallet = Wallet.find(id: session[:wallet_key]) # find_by
#     # if wallet # refactor w rescue_from (in app_controller?)
#       render json: wallet#, include: :cryptos
#     # else
#     #   render json: { errors: ["Not authorized"] }, status: :unauthorized
#     # end
#   end

# end


# # GET /wallets/:id
  # def show
  #   wallet = Wallet.find_by(id: session[:wallet_key])
  #   if wallet # refactor w rescue_from (in app_controller?)
  #     render json: wallet, include: :cryptos
  #   else
  #     render json: { errors: ["Not authorized"] }, status: :unauthorized
  #   end
  # end


  # Alt router setup from index.js
#   import {BrowserRouter} from 'react-router-dom'

# ReactDOM.render(
#   <BrowserRouter>
#     <App />
#   </BrowserRouter>,




# from App.js
# <Route path='/' element={<Component />} />

# from NavBar.js
# <Link to='/'>
# <h1 className='logo'>Green 🌱 Beans</h1>
# </Link>

# from routes.rb (pre-tidying):
# Rails.application.routes.draw do
  
#   resources :walletcryptos, only: :index
#   resources :cryptos, only: :index
#   resources :wallets, only: [:index, :show]

#   post '/create-account', to: 'wallets#create'

#   post '/login', to: 'sessions#create'
#   get '/wallet', to: 'wallets#show' # get "/me", to: "users#show"
#   delete '/logout', to: 'sessions#destroy'
  
#   # Routing logic: fallback requests for React Router.
#   # Leave this here to help deploy your app later!
#   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
# end





# from CreateAccountForm.js

// const [isLoading, setIsLoading] = useState(false)
// setIsLoading(true) # top of component func
// setIsLoading(false) # in fetch
// <button type='submit'>{isLoading ? 'Loading...' : 'Create Account'}</button>
# from App.js (should be in NavBar.js)

# //   function handleLogoutClick() {
#   //     fetch('/logout', { method: 'DELETE' }).then(r => {
#   //       if (r.ok) {
#   //         setWalletKey(null)
#   //       }
#   //     })
#     // }






# from Create Acct

# const [passwordConfirmation, setPasswordConfirmation] = useState('')

# "password_confirmation": passwordConfirmation,

# <div className='form-field'>
#       <label>Password Confirmation </label>
#       <input 
#         className="form-input"
#         type='password'
#         id='password_confirmation'
#         value={passwordConfirmation}
#         onChange={e => setPasswordConfirmation(e.target.value)}
#         autoComplete='current-password'
#       />
#     </div>


# from walletcrypto.rb

  # # after initialize :init
  # def init
  #   self.crypto.quantity = 1
  # end





## bcrypt gem - wallet.rb

  has_secure_password # bcrypt gem

  # validates :password ##???? handled by b-crypt?

  # after initialize :init # 

  # FIX
  # def init
  #   self.cryptos ||= []
  # end








  # from WalletCryptos Controller

  # skip_before_action :authorize, only: :create # FOR DEV ONLY - remove!!!!!!!


  # from Cryptos.js (removed when rendering errors)
  # window.alert(`Added to Wallet! 🌱`)

  # 🗑️ 



  