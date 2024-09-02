import { Box, Typography, styled, Button } from "@mui/material"
import { Search } from "@mui/icons-material"
import { WorkOutline } from "@mui/icons-material"
import { useAuth0 } from "@auth0/auth0-react";

const Component =styled(Box)({
  backgroundColor: '#f5f5f7',
  height: 44,
});

const NavBar = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  margin : '0 auto',
  ' > *' : {
    color: 'rgba(0, 0, 0, 0.8)',
    fontWeight: 600,
    opacity: .9,
    padding: '0 21px',
    fontSize: '14px'
  }
})

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
 const appleLogo = "https://cdn-icons-png.flaticon.com/512/0/747.png";
 const navData = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertaintment', 'Accessories', 'Support',];

  return (
    <Component>
      <NavBar>
        <img src={appleLogo} alt='logo' style={{width : 37}}/>
        {
          navData.map(nav =>(
            <Typography key={nav}>{nav}</Typography>
          ))
        }

        {
          isAuthenticated && <p>{user.name}</p>
        }

        {
          isAuthenticated ? (
            <Button style={{border: "1px solid black"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
             Log Out
            </Button>
          ):(
            <Button style={{border: "1px solid black"}} onClick={() => loginWithRedirect() } >Log In</Button>
          )
        }

        <Search fontSize="medium"/>
        <WorkOutline fontSize="medium"/>
      </NavBar>
    </Component>
  )
}

export default Header
