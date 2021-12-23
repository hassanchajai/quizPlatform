import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { api } from '../../../helpers';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"


function SignIn({ login_success }) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    api.post("/auth/login", values).then(async res => {
      let userObj = jwt_decode(res.data.token);
      login_success(userObj)
      navigate("/", { replace: true })
    }).catch(err => {
      console.log(err);
      alert(err.response.data.message);
    })
  };
  const handleonchange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // justifyContent:"center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleonchange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleonchange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

        </Box>
      </Box>

    </Container>
  );
}
export default (SignIn)