import { Layout } from '@/components/layouts';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
} from '@mui/material';
import React, { ChangeEvent, useMemo, useState } from 'react';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { EntryStatus } from '@/interfaces';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

export const EntryPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<EntryStatus>('pending');
  const [touched, setTouched] = useState(false);

  const isInvalid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {};

  return (
    <Layout title=".....">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entry: ${inputValue}`}
              subheader={`Created ... ago`}
            />
            <CardContent>
              <TextField
                sx={{ margintop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="New Entry"
                autoFocus
                multiline
                label="New Entry"
                value={inputValue}
                onChange={onInputChange}
                helperText={isInvalid && 'Insert value'}
                onBlur={() => setTouched(true)}
                error={isInvalid}
              />
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChanged}>
                  {validStatus.map((opt) => (
                    <FormControlLabel
                      key={opt}
                      value={opt}
                      control={<Radio />}
                      label={capitalize(opt)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark',
        }}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

export default EntryPage;
