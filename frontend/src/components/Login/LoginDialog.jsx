import {
  Box,
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState, useContext } from "react";

//!components
import { authSignUp , authLogin} from "../../services/api";
import { DataContext } from "../../context/DataProvider";

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const initialSignUpValues = {
  userName: "",
  email: "",
  password: "",
  phone: "",
};

const initialLoginValues = {
  userName: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signUp, setSignUp] = useState(initialSignUpValues);
  const [login, setLogin] = useState(initialLoginValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };
  const toggleLogin = () => {
    toggleAccount(accountInitialValues.login);
  };

  const handleClose = () => {
    setOpen(false);
    setError(false);
    toggleAccount(accountInitialValues.login);
  };

  const onInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authSignUp(signUp);
    if (!response) return;
    handleClose();
    setAccount(signUp.userName);
  };

  const loginUser = async () => {
    let response = await authLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(login.userName);
    }else{
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Container>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography
              variant="h5"
              style={{ fontWeight: 600, fontSize: "24px" }}
            >
              {account.heading}
            </Typography>
            <Typography
              style={{
                marginTop: 20,
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#DBDBDB",
                fontSize: "18px",
              }}
            >
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label= "Enter username"
                onChange={(e) => onValueChange(e)}
                name = "userName"
              />
              {error && <Error>Please Enter valid username & password</Error>}
              <TextField
                variant="standard"
                label="Enter  Password"
                onChange={(e) => onValueChange(e)}
                name="password"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginBtn onClick={() => loginUser()}>Login</LoginBtn>
              <Text2>OR</Text2>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter  User Name"
                onChange={(e) => onInputChange(e)}
                name="userName"
              />
              <TextField
                variant="standard"
                label="Enter  Email Id"
                onChange={(e) => onInputChange(e)}
                name="email"
              />
              <TextField
                variant="standard"
                label="Enter  phone Number"
                onChange={(e) => onInputChange(e)}
                name="phone"
              />
              <TextField
                variant="standard"
                label="Enter  Password"
                onChange={(e) => onInputChange(e)}
                name="password"
              />
             
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginBtn onClick={() => signupUser()}>Continue</LoginBtn>
              <RequestOTP onClick={() => toggleLogin()}>
                Existing User? Log in
              </RequestOTP>
            </Wrapper>
          )}
        </Box>
      </Container>
    </Dialog>
  );
};

const Container = styled(Box)`
  height: 75vh;
  width: 95vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83.96%;
  width: 30%;
  color: #fff;
  padding: 45px 35px;
  font-size: 15px;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginBtn = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const Text2 = styled(Typography)`
  text-align: center;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  padding-top: 60px;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size:10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight:600;
`;
export default LoginDialog;
