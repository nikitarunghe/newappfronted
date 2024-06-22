import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`

    background-image: url(https://www.google.com/imgres?q=blog%20website%20background%20free&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Foffice-table-with-cup-coffee-keyboard-notepad_1220-4617.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fblog&docid=IpGZQDaohdsJoM&tbnid=wCom9mcne3r7gM&vet=12ahUKEwicioGI4-yGAxU77TgGHQiVAYEQM3oECDIQAA..i&w=626&h=417&hcb=2&ved=2ahUKEwicioGI4-yGAxU77TgGHQiVAYEQM3oECDIQAA);
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">ABOUT US</Typography>
                <Text variant="h5">A blog section is a dedicated area on your website where you can publish regular, informative, and engaging articles. <br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/nikitarunghe" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="nikita36853@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;