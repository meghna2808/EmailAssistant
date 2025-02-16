import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import axios from 'axios'

function App() {
  const [emailContent,setEmailContent]=useState("");
  const[tone, setTone]=useState("");
  const[generatedReply,setGeneratedReply]=useState("");
  const[loading, setLoading]=useState(false);
  const[error,setError]=useState("");
  const handleSubmit=async()=>{
      setLoading(true);
      setError('');
      try{
        const response=await axios.post("http://localhost:8080/api/email/generate",{
          emailContent,
          tone
        });
        setGeneratedReply(typeof response.data==='string' ? response.data: JSON.stringify(response.data));
      }catch(error){
        setError("Failed to generate reple. Please try again");
        console.error(error);
      }finally{
        setLoading(false);
      }
  };
  return (
    <>
      <Container maxwidth="md" sx={{py:4}}>
        <Typography variant='h3'component='h1'  align="center" gutterBottom >
          Email Reply Generator
        </Typography>
        <Box sx={{max:3}}>
          <TextField
          fullWidth
          multiline
          rows={10}
          variant='outlined'
          label="Original Email Content"
          value={emailContent || ""}
          onChange={(e)=>setEmailContent(e.target.value)}
          sx={{mb:3}}
          />
          <FormControl fullWidth sx={{mb:2}}>
            <InputLabel>Tone(Optional)</InputLabel>
            <Select
             value={tone || ""}
             label={"Tone(Optionals)"}
             onChange={(e)=>setTone(e.target.value)}
             >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
            <Button
            variant='contained'
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
            sx={{mt:2}}>
            {loading? <CircularProgress/>:"Generate Reply"}
            </Button>
          </FormControl>
        </Box>
        {error && (
          <Typography color='error' sx={{mb:2}}>
            {error}
          </Typography>
        )}
        {generatedReply && (
          <Box sx={{mt:3}}>
            <Typography variant='h6' gutterBottom>
              Generated Reply:
            </Typography>
            <TextField
            fullWidth
            variant='outlined'
            multiline
            rows={10}
            value={generatedReply || ""}
            inputProps={{readOnly:true}}/>
            <Button variant='outlined' sx={{mt:2}}
            onClick={()=>navigator.clipboard.writeText(generatedReply)}
            >
              Copy to clipboard
            </Button>
          </Box>
        )}
      </Container>
       
    </>
  )
}

export default App
