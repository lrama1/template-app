import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const res = await axios.post('/api/chat', { message });
    setResponse(res.data.data);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
      <Button variant="contained" onClick={() => setOpen(!open)}>
        Chat
      </Button>
      {open && (
        <Box sx={{ mt: 2, p: 2, border: '1px solid #ccc', borderRadius: 2, backgroundColor: '#fff' }}>
          <Typography variant="h6">Chat</Typography>
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button variant="contained" onClick={handleSend} sx={{ mt: 2 }}>
            Send
          </Button>
          {response && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              {response}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Chat;