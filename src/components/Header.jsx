import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import datutandaGuy from '../assets/datutanda_guy.png'

const Header = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundImage: `url(${require('../assets/background-yucatan.jpg')})`,
        backgroundSize: 'cover', // You may need to adjust this based on your design requirements
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }
      }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={datutandaGuy}
                alt="Da tu tanda guy"
                style={{ 
                    width: "40%", 
                    marginTop: 20,
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header