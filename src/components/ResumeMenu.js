import React from 'react';

import Education from './ResumeSections/Education';
import Work from './ResumeSections/WorkExperience';
import LanguagesAndSkills from './ResumeSections/LanguagesAndSkills';

import styled from 'styled-components';

export default class ResumeMenu extends React.Component{
    constructor(){
        super();
        this.state = {
            educationSection:"",
            workSection:"",
            languagesAndSkillsSection: "",
            skillsSection: ""
        };
    }

    renderLanguagesAndSkillsSection() {
        const languages = ["English", "Korean"]
        const skills = [
            "Hand-sketching",
            "Technical Sketches",
            "Stone Sorting",
            "Gouache Rendering",
            "Rhino 3D",
            "Photoshop",
            "Illustrator",
            "Microsoft Office"
        ]
        const props = { languages, skills }
        return(<LanguagesAndSkills { ...props }/>)
    }

    renderEducationSection() {
        let educationArray = {education :
            [{
                school: "Fashion Institute of Technology",
                degree:"Associate Degree in Applied Science, Jewelry Design",
                minor: "",
                gpa:"3.72/4.0",
                graduated: "Dec 2013"
            },
             {
                 school: "Sungshin Women’s University",
                 degree:"Bachelor of Fine Art (BFA), Metal Craft",
                 minor: "",
                 gpa:"3.78/45",
                 graduated: "2011"
            }]
        };
        const educationSection = educationArray.education.map((post) => {
            const { school, degree, minor, gpa, graduated } = post;
                let props = {
                    school: school,
                    degree: degree,
                    minor: minor,
                    gpa: gpa,
                    graduated: graduated};
                return (<Education {...props} />)
            });
            return educationSection
    }

    renderWorkSection() {
        let workArray = {
            work :
            [{
                company: "Valani",
                jobTitle:"Senior Jewelry Designer",
                descriptions: [
                    'Manage design process from concept, trend research, design, technical sketch to finished product',
                    'Design jewelry in one of a kind and collection with precious stones and diamonds',
                    'Manage production, collecting gemstones and diamonds, communicating with factories, and quality control'
                ],
                date:"Aug 17' - Present",
                location: 'New York, NY'
            },
            {
                 company: "Real Gems Inc",
                 jobTitle:"Web Developer Intern",
                 descriptions: [
                    'Design one of a kind jewelry with rubies, sapphires, emeralds and diamonds',
                    'Design from concept, design, technical sketch, to finished product',
                    'Built up the high-end jewelry suite styles.'
                ],
                 date:"May 14' - Aug 17'",
                 location: 'New York, NY'
            },
            {
                company: "Lynn Ban",
                jobTitle:"Freelance Technical Designer",
                descriptions: [],
                date:"Oct 14' - Mar 15'",
                location: 'New York, NY'
           },
           {
                company: "Judith Ripka",
                jobTitle:"Jewlrey Design Intern",
                descriptions: [
                    'Work with designer and tech artists as learning method and textures associated with Judith Ripka',
                    'Assist a designer facilitate completion, sketches and technical drawings ',
                ],
                date:"Sep2013 - May 2014'",
                location: "New York, NY"
            },
        {
                company: "St. Etienne",
                jobTitle:"Merchandising Intern",
                descriptions: [
                    'Sold imported high-end jewelry in the luxury department store in Seoul, Korea',
                    'Assisted on importing jewelry at Hong Kong Jewelry and Gem Fair 2011',
                ],
                date:"Jan 11' - Mar 11",
                location: "Seoul, South Korea"
        },]
        };
        const workSection = workArray.work.map((post) => {
            const { company, jobTitle, descriptions, date, location } = post;
                let props = {
                    company,
                    jobTitle,
                    descriptions,
                    location,
                    date
                };
                return (<Work {...props} />)
            });
            return workSection
    }

    componentDidMount(){
            const educationSection = this.renderEducationSection()
            this.setState({educationSection})

            const workSection = this.renderWorkSection()
            this.setState({workSection});

            const languagesAndSkillsSection = this.renderLanguagesAndSkillsSection()
            this.setState({languagesAndSkillsSection})
    }
    render(){
        const { educationSection, languagesAndSkillsSection, workSection } = this.state;
            return(
            <ResumeContainer>
                <SectionContainer>
                    <MenuContainer>
                        <MenuItem>Education</MenuItem>
                    </MenuContainer>
                    <EducationContainer>
                        {educationSection}
                    </EducationContainer>
                </SectionContainer>
                <SectionContainer>
                    <MenuContainer>
            <MenuItem>{`Skills & Languages`}</MenuItem>
                    </MenuContainer>
                    <EducationContainer>
                            {languagesAndSkillsSection}
                    </EducationContainer>
                </SectionContainer>
                <SectionContainer>
                    <MenuContainer>
                        <MenuItem>Work Experience</MenuItem>
                    </MenuContainer>
                    <EducationContainer>
                            {workSection}
                    </EducationContainer>
                </SectionContainer>
            </ResumeContainer>
        )
    }
}

const ResumeContainer = styled.div`
padding-bottom:5em;
background-color: #eee;
`;
const SectionContainer = styled.div`
display:inline-flex;
justify-content: flex-start;
background-color: #eee;
width:100%;
margin-bottom: 3rem;
`;
const MenuContainer = styled.div`
background-color: #eee;
padding-top:.2em;
color:black;
display:flex;
justify-content: flex-start;
flex-direction:column;
font-family: Raleway-Regular;
font-size: 20pt;
text-align:right;
margin-left:9.6em;
width:10em;
border-right: 1px solid silver;
padding-right: 2.5rem;
`;
const MenuItem = styled.div`
margin: 1em;
letter-spacing: .1em;
`;
const EducationContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: flex-start;
margin-left:5em;
text-align:left;
width:495px;
padding-bottom:2em;
background-color: #eee;
`;
