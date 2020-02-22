import React from 'react';
import styled from 'styled-components';

const Language = (props) => {
    const { languages, skills } = props;
    const WorkItemContainer = styled.div`
        display:flex;
        flex-direction:column;
        color:black;
        font-family: Raleway-Regular;
        letter-spacing:.1em;
        font:20pt;
        background-color: #eee;
        width:100%;
        margin-top:2em;
    `;
    const ItemContainer = styled.div`
        margin:.1em;
    `;
    const LanguagesContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    `
    const LanguageItem = styled.div`
        padding-right: 1rem;
    `
    const SkillsContainer = styled.ul`
        margin-top: 1rem;
        padding-left: 1rem;
        list-style-type:circle;
        
    `
    const SkillItem = styled.li`
        padding: .25rem 0 .25rem 0;
    `
    return(
        <WorkItemContainer>
            <ItemContainer>
                <LanguagesContainer>
                {
                    languages.map(language => (
                        <LanguageItem>
                            {language}
                        </LanguageItem>
                    ))
                }
                </LanguagesContainer>
                <SkillsContainer>
                {
                    skills.map(skill => (
                        <SkillItem>
                            {skill}
                        </SkillItem>
                    ))
                }
                </SkillsContainer>
            </ItemContainer>
        </WorkItemContainer>
        )
}

export default Language
