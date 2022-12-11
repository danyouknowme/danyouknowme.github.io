import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;

    h3 {
        font-size: 1.3rem;
        font-weight: bold;
        text-decoration: underline;
        margin-bottom: 0.5rem;
    }

    p {
        text-indent: 1em;
        hyphens: auto;

        a {
            text-decoration: underline;
            color: #805ad5;
        }
    }
`

export const ResumeContent = styled.div`
    margin: 2rem auto;
    
    button {
        border-radius: 5px;
        background-color: #319795;
        padding: 0.5rem 1.3rem;
        color: #fff;
        font-weight: bold;
        transition: all 0.2s;

        &:hover {
            background-color: #267a79;
        }
    }
`