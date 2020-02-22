import React from 'react';
import styled from 'styled-components';

const WorkExperience = (props) => {
    const { company, jobTitle, descriptions, date, location } = props;
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
    const DescriptionContainer = styled.ul`
        margin-top:.5rem;
        padding-left: 1rem;
        list-style-type:circle;
    `;
    const CompanyAndDateContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `
    const DateContainer = styled.div`
        font-family: Moon-Light;
        margin:.1em;
    `

    const DescriptionItem = styled.li`
        margin-top: .25rem;
    `;
    return(
        <WorkItemContainer>
            <CompanyAndDateContainer>
                <ItemContainer>{company}</ItemContainer>
                <DateContainer>{date}</DateContainer>
            </CompanyAndDateContainer>
            <ItemContainer>{location}</ItemContainer>
            <ItemContainer>{jobTitle}</ItemContainer>
            <ItemContainer>
                <DescriptionContainer>
                    {
                        descriptions.map((description, idx) => (
                                <DescriptionItem key={idx}>
                                  {description}
                                </DescriptionItem>
                        ))
                    }
                </DescriptionContainer>
            </ItemContainer>
        </WorkItemContainer>
        )
}

export default WorkExperience
