import { Box, styled, Typography } from "@mui/material"

const Component = styled(Box)({
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& > p' : {
    fontSize: '17px',
    padding: '12px 0',
    color: '#1d1d1f'
  }
})

const Info = () => {
  return (
    <div>
      <Component>
        <Typography>Get upto ₹8000.00 instant savings on selected products with eligible HDFC Bank Cards. *<span style={{color: '#2997ff'}} > Shop Now &gt;</span></Typography>
      </Component>
    </div>
  )
}

export default Info
