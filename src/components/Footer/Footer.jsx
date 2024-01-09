import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Direccion'} />
        <FooterLink 
        text={'Chuburna Plus, Merida, Yucatan, Mexico'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Nada por aqui'} />
        <FooterLink text={'Nada por aca'} />
        
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'Sobre nosotros'} />
        <FooterLink text={'No hay mucho aun'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Da Tu Tanda Merch'} />
        <FooterLink text={'Phone case'} />
        <FooterLink text={'Hoodie'} />
      </StackColumn>
    </BoxRow>
  )
}

export default Footer