import { styled, Box, Typography } from '@mui/material';


const Image = styled(Box)`
    width: 100%;
   
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4csM3xOgNP7C50nF-yQtII-m-9X8GDVQlqQ&s)center/55% repeat-x #000;
    
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;



const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
            
        </Image>
    )
}

export default Banner;