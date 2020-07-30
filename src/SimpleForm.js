import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';


class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id:'a',
              
              message:'Welcome ',
              trigger:'hello',
            },
            
            {
              id: 'hello',
              
              user: true,
              
              trigger: 'b',
            },
            {
              id: 'b',
              
              message:'Hi, how may I help you ?',
              
              trigger: 'c',
            },
            {
              id: 'c',
              
              message:'Please reply with the numbers to thecorresponding questions.',
              
              trigger: '1',
            },
            
            {
              id: '1',
              message: '1.General IP Queries',
              trigger:'2'
            },
            {
              id: '2',
              message: '2.Learning Path 1' ,
              trigger:'3'
            },
            {
              id: '3',
              message: '3.Learning Path 2' ,
              trigger:'4'
            },
            {
              id: '4',
              message: '4.Learning Path 3' ,
              trigger:'5'
            },
            {
              id: '5',
              message: '5.Live Projects' ,
              trigger:'6'
            },
            {
              id: '6',
              
              options: [
                { value: '1', label: '1', trigger: 'ip' },
                { value: '2', label: '2', trigger: 'lp1' },
                { value: '3', label: '3', trigger: 'lp2' },
                { value: '4', label: '4', trigger: 'lp3' },
                { value: '5', label: '5', trigger: 'lip' },
                
              ],
            },

            {id:'ip',
            message: 'Please reply with the corresponding Question number to get your queries Cleared.',
            trigger:'ip1'},
            {id:'ip1',
            message: '1. IP Start Date',
            trigger:'ip2'},
            {id:'ip2',
            message: 'Q2 IP End Date',
            trigger:'ip3'},
            {id:'ip3',
            message: 'Q3 Prerequisites',
            trigger:'ip4'},
            {id:'ip4',
            message: 'Q4 Eligibility',
            trigger:'ip5'},
            {id:'ip5',
            message: 'Q5 Not able to see task',
            trigger:'subinput4'},
            
            {
              id: 'subinput4',
              
              options: [
                { value: '1', label: '1', trigger: 'ipa' },
                { value: '2', label: '2', trigger: 'ip1a' },
                { value: '3', label: '3', trigger: 'ip2a' },
                { value: '4', label: '4', trigger: 'ip3a' },
                { value: '5', label: '5', trigger: 'ip4a' },
                { value: '6', label: '*', trigger: '1' },
                
              ],
            },

            {id:'ipa',
            message: 'A1 When you Accept the invitstion from us,that day is your internship start date',
            trigger:'submore4'},
            {id:'ip1a',
            message: 'A2 The IP is of 3 months from start day if your Ip',
            trigger:'submore4'},
            {id:'ip2a',
            message: 'A3 The interns have to know the basics of programming',
            trigger:'submore4'},
            {id:'ip3a',
            message: 'A4 The student must have computer/IT background',
            trigger:'submore4'},
            {id:'ip4a',
            message: 'A4 Please Message  "Cloud Couselage HR" in Bitrix24',
            trigger:'submore4'},

            {
              id:'submore5',
              message:'press * for previous menu',
              trigger:'psubmenu5'
            },
            {
              id:'psubmenu5',
              user:true,
              trigger:'lp1'
            },


            {
              id:'submore4',
              message:'press * for previous menu',
              trigger:'psubmenu4',
            },
            {
              id:'psubmenu4',
              user:true,
              trigger:'ip',
            },
            {
              id:'mainmenu',
              user:true,
              trigger:'1',
            },


            {
              id: 'lp1',
              message: 'Please reply with the corresponding Question number to get your queries Cleared.',
              trigger: 'lp12',
            },
            {
              id: 'lp12',
              message: 'Q1 Not able to access the LP1 page with my token',
              trigger: 'lp13',
            },
            {
              id: 'lp13',
              message: 'Q2 Login issues with training for every module of LP1/ LP2, do we have to register again for access to the content?',
              trigger: 'lp14',
            },
            {
              id: 'lp14',
              message: 'Q3 I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. ',
              trigger: 'lp15',
            },
            {
              id: 'lp15',
              message: 'Q4 Im not able to log in for the LP1 task ',
              trigger: 'subinput5',
            },
            //subinput5
            {
              id:'subinput5',
              options: [
                {value:'1',label:'1',trigger:'lp1a'},
                {value:'2',label:'2',trigger:'lp12a'},
                {value:'3',label:'3',trigger:'lp13a'},
                {value:'4',label:'4',trigger:'lp14a'},
                {value:'5',label:'*',trigger:'1'},  
              ]
            }, 

            {
              id: 'lp1a',
              message: 'A1 Please watch the videos shared with the invite and you should not face any problems in accessing the training. Please follow the protocol shown in the videos.',
              trigger: 'submore5',
            },
            {
              id: 'lp12a',
              message: 'A2  Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login',
              
              trigger: 'submore5',
            },
            {
              id: 'lp13a',
              message: 'A3 each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode.',
              trigger: 'submore5',
            },
            {
              id: 'lp14a',
              message: 'A4 Ensure youre using the right token',
              trigger: 'subinput5',
            }, 
                    
            {
              id:'lp2',
              message:'Please reply with the correspondingQuestion number to get your queriesCleared.',
              trigger:'lp21',
            },
            {
              id:'lp21',
              message:'Q1 What to do after completing LP1/ LP2/ LP3?',
              trigger:'lp22',

            },
            {
              id:'lp22',
              message:'Q2  What happens in LP2? What kind of training can we expect?',
              trigger:'lp23',

            },
            {
              id:'lp23',
              message:'Q3 Are LP1/ LP2/ LP3 a part of the Live Project?',
              trigger:'lp24',
            },
            {
              id:'lp24',
              message:'Q4 The videos of LP2 are taking too much time to load.',
              trigger:'lp25',
            },
            {
              id:'lp25',
              message:'Q5  Can I do certification for the training provided in LP2? ',
              trigger:'subinput3',
            },          
            {
              id:'subinput3',
              options: [
                {value:'1',label:'1',trigger:'lp21a'},
                {value:'2',label:'2',trigger:'lp22a'},
                {value:'3',label:'3',trigger:'lp23a'},
                {value:'4',label:'4',trigger:'lp24a'},
                {value:'5',label:'5',trigger:'lp25a'},
                {value:'6',label:'*',trigger:'1'},  
              ]
            },           
            {
              id:'lp21a',
              message:'1a Mark your task as finished and wait for the next instructions.',
              trigger:'submore',
            },           
            {
              id:'lp22a',
              message:'2a The main focus of LP2 is to provide you with a basic foundation of the technology youre interested in.',
              trigger:'submore',
            },           
            {
              id:'lp23a',
              message:'3a LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship.',
              trigger:'submore',
            },           
            {
              id:'lp24a',
              message:'4a  To experience these high definition videos we request you to wait at least 5 minutes or more',
              trigger:'submore',
            },           
            {
              id:'lp25a',
              message:'5a  Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at no profit no loss basis ',
              trigger:'submore',
            },          

            {
              id:'submore',
              message:'press * for previous menu',
              trigger:'psubmenu',
            },
            {
              id:'psubmenu',
              user:true,
              trigger:'lp2',
            },
            {
              id:'submore2',
              message:'press * for previous menu',
              trigger:'psubmenu2',
            },
            {
              id:'psubmenu2',
              user:true,
              trigger:'lp3',
            },
            {
              id:'submore3',
              message:'press * for previous menu',
              trigger:'psubmenu3',

            },
            {
              id:'psubmenu3',
              user:true,
              trigger:'lip',
            },
            
            {
              id:'lip',
              message:'Please reply with the correspondingQuestion number to get your queriesCleared.',
              trigger:'lip1',
            },
            {
              id:'lip1',
              message:'Q1 What to do after Live Projects? Are we getting an offer letter/Stipend?',
              trigger:'lip2',
            },
            {
              id:'lip2',
              message:'Q2  What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects? ',
              trigger:'lip3',
            },
            {
              id:'lip3',
              message:'Q3 Live Project/ LP3 has to be submitted individually or it will be a group project? ',
              trigger:'lip4',
            },
            {
              id:'lip4',
              message:'Q4 Problem statements of the Live Project will be chosen by the intern or will be provided by Cloud Counselage?',
              trigger:'lip5',
            },
            {
              id:'lip5',
              message:'Q5 Will I get LP3 and Live project of technology other than what I am selected for?',
              trigger:'subinput2',
            },
            {
              id:'subinput2',
              options: [
                {value:'1',label:'1',trigger:'lip1a'},
                {value:'2',label:'2',trigger:'lip2a'},
                {value:'3',label:'3',trigger:'lip3a'},
                {value:'4',label:'4',trigger:'lip4a'},
                {value:'5',label:'5',trigger:'lip5a'},
                {value:'6',label:'*',trigger:'1'},               
              ]
            },

            {
              id:'lip1a',
              message:'A1 Your internship is complete after this. There is no stipend for live projects.',
              trigger:'submore3',
            },
            {
              id:'lip2a',
              message:'A2 Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage.',
              trigger:'submore3',
            },
            {
              id:'lip3a',
              message:'A3 All the LP3/  Live Projects are on an individual scale.',
              trigger:'submore3',
            },
            {
              id:'lip4a',
              message:'A4 Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation.',
              trigger:'submore3',
            },
            {
              id:'lip5a',
              message:'A5 No, you will receive LP3 and Live Projects of your respective technology.',
              trigger:'submore3',
            },
            {
              id:'lp3',
              message:'Please reply with the corresponding Question number to get your queries Cleared.',
              trigger:'lp31',
            },
            {
              id:'lp31',
              message:'Q1 What to do after completing LP1/ LP2/ LP3?',
              trigger:'lp32',
            },
            {
              id:'lp32',
              message:'Q2  When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?',
              trigger:'lp33',
            },
            {
              id:'lp33',
              message:'Q3 What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?',
              trigger:'lp34',
            },
            {
              id:'lp34',
              message:'Q4 What to do after LP3?',
              trigger:'subinput',
            },
            
            {
              id:'subinput',
              options: [
                {value:'1',label:'1',trigger:'lp31a'},
                {value:'2',label:'2',trigger:'lp32a'},
                {value:'3',label:'3',trigger:'lp33a'},
                {value:'4',label:'4',trigger:'lp34a'},
                {value:'5',label:'*',trigger:'1'},                
              ]

            },

            {
              id:'lp31a',
              message:'A1 Mark your task as finished and wait for the next instructions.',
              trigger:'submore2',
            },           
            {
              id:'lp32a',
              message:'A2 LP1 - 01/03/2020 LP2 - 18/03/2020 LP3 - 02/04/2020 ',
              trigger:'submore2',
            },
            
            {
              id:'lp33a',
              message:'A3  This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers.',
              trigger:'submore2',
            },
           
            {
              id:'lp34a',
              message:'A4 You ll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June.',
              trigger:'submore2',
            },
                
          ]}
        />
      );
    }
  }
  
  export default SimpleForm;