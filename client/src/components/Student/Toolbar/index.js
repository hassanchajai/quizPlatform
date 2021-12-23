import { Add } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon
  } from '@mui/material';

  // import { Search as SearchIcon } from 'react-feather';
  
  const Toolbar = (props) => (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
      
        <Button
          color="primary"
          variant="contained"
          onClick={()=>{props.handleOpen()}}
        >
        <Add/>  Add Student
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                // onChange={(e)=>props.onChangeInputSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                       <i className="fas fa-search"></i>
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search Student"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
  
  export default Toolbar;
  