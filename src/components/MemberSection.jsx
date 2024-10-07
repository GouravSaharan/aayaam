import React, { useState } from 'react';
import { Box, Typography, Grid, Avatar, Select, MenuItem } from '@mui/material';

const FacultyAdvisor = () => {
  return (
    <Box
      sx={{
        width: '700px',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        color: '#333',
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '20px', 
        marginLeft: '250px',
        marginTop: '100px',
        marginBottom: '40px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <Avatar
        alt="Dr. Bishweshwar Babu"
        src="https://static.wixstatic.com/media/c954fe_71f2a90d37734d79ab004be9f1533516~mv2.jpg/v1/fill/w_613,h_661,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c954fe_71f2a90d37734d79ab004be9f1533516~mv2.jpg"
        sx={{ width: 200, height: 200, marginRight: '30px', border: '3px solid #2196f3' }}
      />
      <Box>
        <Typography variant="h5" fontWeight="bold" color="#2196f3">
          Faculty Advisor
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="#333">
          Dr. Bishweshwar Babu
        </Typography>
        <Typography variant="body2" color="#555">
          Assistant Professor, Department of Mechanical Engineering
          <br />
          Email: <a href="mailto:bishweshwar@nitt.edu" style={{ color: '#2196f3' }}>bishweshwar@nitt.edu</a>
        </Typography>
      </Box>
    </Box>
  );
};

const MemberSection = () => {
  return (
    <Box sx={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', color: '#333' }}>
      <FacultyAdvisor />
      <Typography variant="h4" textAlign="center" marginBottom="24px" fontWeight="bold" color="#2196f3">
        CORE MEMBERS &  HEADS 2024-25
      </Typography>
      <CoreMembers />
    </Box>
  );
};

const CoreMemberCard = ({ name, position, image }) => {
  return (
    <Box
      sx={{
        width: '200px',
        height: '300px',
        backgroundColor: '#ffffff',
        color: '#333',
        borderRadius: '8px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        marginBottom: '20px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{ width: '100%', height: '75%', objectFit: 'cover', borderBottom: '2px solid #2196f3' }}
      />
      <Box padding="16px" textAlign="center">
        <Typography variant='' fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {position}
        </Typography>
      </Box>
    </Box>
  );         
};                                        

const CoreMembers = () => {
  const members = [
    { name: 'Shivam Mishra', position: 'President', image: './Shivam.jpg' },
    { name: 'Hanuman Rathore', position: 'Vice-President', image: './Hanuman_rathore.jpg' },
    { name: 'Priyanshu Bansal', position: 'Treasurer', image: './Priyanshu_Bansal.jpg' },
    { name: 'Ram Chaudhary', position: 'General Secretary', image: './Ram_Choudhary.jpg' },
    { name: 'Rahul Mali', position: 'Overall Coordinator', image: './Rahul_Mali.jpg' },
    { name: 'Gaurav Saharan', position: 'Web-Ops  ', image: 'https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/20722/SM1072086.jpg' },
    { name: 'Pankaj Kumar', position: 'PR and Publicity  ', image: './Pankaj_Kumar.png' },
    { name: 'Hanuman Rathore', position: 'Marketing  ', image: './Hanuman_rathore.jpg' },
    { name: 'Aryan', position: 'Design  ', image: './Aryan.jpg' },
    { name: 'Himanshu', position: 'Magazine  ', image: './Himanshu.jpg'},
    { name: 'Tiya Roy ', position: 'Video Editing  ', image: './Tiya.jpg' },
    { name: 'Vikash Patel', position: 'Hindi Learning  ', image: './Vikash.jpg' },
    { name: 'Radhesham', position: 'Event & Operations  ', image: './Radhesham.jpeg' },
    { name: 'Pankaj Kumar Arya', position: 'Content  ', image: 'https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/20722/SM1072086.jpg' },
  ];

  return (
    <Grid container spacing={2} justifyContent="center">
      {members.map((member, index) => (
        <Grid item key={index}>
          <CoreMemberCard
            name={member.name}
            position={member.position}
            image={member.image}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const FilterSection = () => {
  const [position, setPosition] = useState('All');

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  return (
    <Box sx={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', color: '#333' }}>
      <Typography variant="h4" textAlign="center" marginBottom="24px" fontWeight="bold" color="#2196f3">
        MORE MEMBERS 2024-25
      </Typography>

      <Box display="flex" justifyContent="space-around" mb={4}>
        <Select
          value={position}
          onChange={handlePositionChange}
          displayEmpty
          sx={{
            minWidth: 200,
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            '& .MuiSelect-select': {
              padding: '10px',
              fontWeight: 'bold',
              color: '#333',
            },
          }}
        >
          <MenuItem value="All">All Positions</MenuItem>
          <MenuItem value="Manager">Manager</MenuItem>
          <MenuItem value="Deputy Manager">Deputy Manager</MenuItem>  
        </Select>
      </Box>

      <FilteredMembers positionFilter={position}/>
    </Box>
  );
};

const FilteredMembers = ({ positionFilter}) => {
  const members = [
    { name: 'Ritik Kumar Jha', position: 'Deputy Manager', image: './Ritik_kumar_jha.jpg' },
    { name: 'Anjali', position: 'Manager', image: './Anjali.jpg' },
    { name: 'Akshat', position: 'Manager',  image: './Akshat.jpg' },
    { name: 'Riya', position: 'Manager',  image: 'https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/20722/SM1072086.jpg' },
    { name: 'Amar', position: 'Manager', image: './Amar.jpg' },
    { name: 'Kashish', position: 'Manager', image: './Kashish.jpg' },
    { name: 'Aadarsh', position: 'Manager',  image: './Aadarsh.jpg' },
    { name: 'Deeksha', position: 'Manager',  image: './Deeksha.jpg' },
    { name: 'Atishay', position: 'Manager', image: './Atishay.jpg' },
    { name: 'Atish', position: 'Manager', image: 'https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/20722/SM1072086.jpg' },
    { name: 'Himanshu', position: 'Manager',  image: 'https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/20722/SM1072086.jpg' },
    { name: 'Asadullah', position: 'Manager',  image: './Asadullah.jpg' },
    { name: 'Mahendra', position: 'Manager',  image: './Mahendra.jpg' },
    { name: 'Manish', position: 'Manager',  image: './manish.jpg' },
    { name: 'Munnu', position: 'Manager',  image: './Munnu.jpg' },
    { name: 'Neha', position: 'Manager',  image: './NEHA.jpg' },
    { name: 'Nisha', position: 'Manager',  image: './Nisha.jpg' },
    { name: 'Nitin', position: 'Manager',  image: './Nitin.jpg' },
    { name: 'Paras', position: 'Manager',  image: './Paras.jpg' },
    { name: 'Parikshit', position: 'Manager',  image: './Parikshit.jpg' },
    { name: 'Priyanka', position: 'Manager',  image: './priyanka.jpg' },
    { name: 'Rahul', position: 'Manager',  image: './Rahul.jpg' },
    { name: 'Rudra', position: 'Manager',  image: './rudra.jpg' },
    { name: 'Sahil', position: 'Manager',  image: './Sahil.jpg' },
    { name: 'Sakshi', position: 'Manager',  image: './Sakshi.jpg' },
    { name: 'Tanchho', position: 'Manager',  image: './Tanchho.jpg' },
    { name: 'Vardhman', position: 'Manager',  image: './Vardhman.jpg' },
    { name: 'Apoorva ', position: 'Deputy Manager', image: './Apoorva.jpg' },
    { name: 'Alok ', position: 'Deputy Manager', image: './Alok.png' },
    { name: 'Ankita ', position: 'Deputy Manager', image: './Ankita.jpg' },
    { name: 'Anshika ', position: 'Deputy Manager', image: './Anshika.jpg' },
    { name: 'Ayushi ', position: 'Deputy Manager', image: './Ayushi.jpg' },
    { name: 'Dinesh ', position: 'Deputy Manager', image: './Dinesh.jpg' },
    { name: 'Divyanshi ', position: 'Deputy Manager', image: './Divyanshi.jpg' },
    { name: 'Harsh ', position: 'Deputy Manager', image: './Harsh.JPG' },
    { name: 'Himanshu ', position: 'Deputy Manager', image: './Himanshu_d_m.jpg' },
    { name: 'HIRAMANI ', position: 'Deputy Manager', image: './HIRAMANI.jpeg' },
    { name: 'Muskan ', position: 'Deputy Manager', image: './Muskan.jpg' },
    { name: 'Pritesh ', position: 'Deputy Manager', image: './Pritesh.jpg' },
    { name: 'Rachit ', position: 'Deputy Manager', image: './Rachit.jpg' },
    { name: 'Rishu ', position: 'Deputy Manager', image: './Rishu.png' },
    { name: 'Ritik ', position: 'Deputy Manager', image: './Ritik.jpeg' },
    { name: 'Sayantika ', position: 'Deputy Manager', image: './Sayantika.jpeg' },
    { name: 'Sourabh ', position: 'Deputy Manager', image: './Sourabh.jpg' },
    { name: 'Tejas ', position: 'Deputy Manager', image: './Tejas.jpg' },
    { name: 'Utkarsh ', position: 'Deputy Manager', image: './Utkarsh.jpg' },
    { name: 'Amritansh ', position: 'Deputy Manager', image: './Amritansh.jpeg' },
    { name: 'Gagan ', position: 'Deputy Manager', image: './gagan.jpeg' },
    { name: 'Gargi ', position: 'Deputy Manager', image: './Gargi.jpg' },
    { name: 'Gaurav ', position: 'Deputy Manager', image: './Gaurav.jpg' },
    { name: 'Palak ', position: 'Deputy Manager', image: './Palak.jpg' },
    { name: 'Sumi Dalui ', position: 'Deputy Manager', image: './Sumi_Dalui.jpg' },
    { name: 'Harshit ', position: 'Deputy Manager', image: './Harshit.jpg' },
    { name: 'Kailash ', position: 'Deputy Manager', image: './Kailash.jpg' },
    { name: 'Maanya ', position: 'Deputy Manager', image: './Maanya.jpg' },
    { name: 'Mahesh ', position: 'Deputy Manager', image: './MAHESH.jpg' },
    { name: 'Manish ', position: 'Deputy Manager', image: './Manish_d_m.jpg' },
    { name: 'Naman ', position: 'Deputy Manager', image: './Naman.jpg' },
    { name: 'Pankaj ', position: 'Deputy Manager', image: './Pankaj.jpg' },
    { name: 'Yash Tripathi ', position: 'Deputy Manager', image: './Yash_Tripathi.jpg' },
    { name: 'Priyanshu ', position: 'Deputy Manager', image: './priyanshu.jpg' },
    { name: 'Rashmi ', position: 'Deputy Manager', image: './Rashmi.jpg' },
    { name: 'Ravi ', position: 'Deputy Manager', image: './Ravi.jpg' },
    { name: 'Samkit ', position: 'Deputy Manager', image: './Samkit.png' },
    { name: 'Shivam ', position: 'Deputy Manager', image: './Shivam_d_m.jpg' },
    { name: 'Varun ', position: 'Deputy Manager', image: './Varun.JPG' },
    { name: 'Veer ', position: 'Deputy Manager', image: './Veer.png' },
    { name: 'Vineet ', position: 'Deputy Manager', image: './Vineet.jpeg' },
  ];

  const filteredMembers = members.filter(member => {
    const positionMatch = positionFilter === 'All' || member.position === positionFilter;
    return positionMatch ;
  });

  return (
    <Grid container spacing={2} justifyContent="center">
      {filteredMembers.map((member, index) => (
        <Grid item key={index}>
          <CoreMemberCard
            name={member.name}
            position={member.position}
            image={member.image}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const AlumniSection = () => {
  const [year, setYear] = useState('All');

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const alumni = [
    { name: 'Anup Singh', position: 'President', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_1e4f42428b9042d9920b11edefd107a6~mv2.jpeg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpeg' },
    { name: 'Swapnil', position: 'Vice-President', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_b0c6ffc11370443cb77df63016ab61c2~mv2.jpeg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpeg' },
    { name: 'Roshni', position: 'Hindi learning  head', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_212b641ad005473c943b9d19fe150cab~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Sujata Jha', position: 'Treasurer', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_98eb4085206943e4b14554a5fae79905~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Kanchan', position: 'General Secretary', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_1d30fcaf6313437fa997f5d1b44c5110~mv2.jpg/v1/fill/w_336,h_404,al_c,lg_1,q_80,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Rion', position: 'Overall Coordinator', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_1cf70acbe97646a1acb2daf737a1151e~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Aastha', position: 'Content Head', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_f5032dfec2864e8b838ae42cec411e55~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Vimalprapti', position: 'Design head', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_e786725178224ea590049d037bd76673~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Anshu', position: 'PR & Publicity head', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_ed6eada218c443c598c29a67321f4cb9~mv2.jpg/v1/fill/w_336,h_404,al_c,lg_1,q_80,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Divyanshu', position: 'Marketing Head', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_73dc4f9a05b34321a84aa7aa7fc86ce7~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Sachin Dhatarwal', position: 'Event head', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_8fb65f718da6466baac8be714a73302d~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Praduman', position: 'Alumni Representative', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_790f3ead4bfe4578bdb1c8fbfec3899a~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Somesh', position: 'Video Editor', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_348c8ac68a1f4e2d8aa18ec8a2a77d46~mv2.jpeg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpeg' },
    { name: 'Ankush', position: 'video Editor', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_1e453c0451894d69ad1f330c85144127~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Aayush', position: 'HR & operation head', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_46b1fca7dbb343489bfc85ca19b3c2f8~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Abhilash', position: 'Magazine editor', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_866123dfd7724c17a7b51566314174bd~mv2.jpeg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpeg' },
    { name: 'Varun Singh', position: 'webops head', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_2bbdbed16583405a94b6f92271bf4a9c~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
    { name: 'Shivam', position: 'Alumni Representative', year: '2022-23', image: 'https://static.wixstatic.com/media/c954fe_efc99e5596644fd584125ba888c5b404~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_20211106_0853302.jpg' },
  ];

  const filteredAlumni = alumni.filter((alum) => year === 'All' || alum.year === year);

  return (
    <Box sx={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', color: '#333' }}>
      <Typography variant="h4" textAlign="center" marginBottom="24px" fontWeight="bold" color="#2196f3">
        Alumni Section
      </Typography>

      <Box display="flex" justifyContent="center" mb={4}>
        <Select
          value={year}
          onChange={handleYearChange}
          displayEmpty
          sx={{
            minWidth: 200,
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            '& .MuiSelect-select': {
              padding: '10px',
              fontWeight: 'bold',
              color: '#333',
            },
          }}
        >
          <MenuItem value="All">All Years</MenuItem>
          <MenuItem value="2023-24">2023-24</MenuItem>
          <MenuItem value="2022-23">2022-23</MenuItem>
        </Select>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {filteredAlumni.map((alum, index) => (
          <Grid item key={index}>
            <CoreMemberCard
              name={alum.name}
              position={alum.position}
              image={alum.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const App = () => {
  return (
    <div>
      <MemberSection />
      <FilterSection />
      <AlumniSection />
    </div>
  );
};

export default App;
