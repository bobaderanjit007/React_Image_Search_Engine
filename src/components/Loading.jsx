import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function SkeletonColor() {
  return (
    <Box id="search-result"
      sx={{
        bgcolor: 'transperent',
        p: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Skeleton className="img"
        sx={{ bgcolor: 'grey.900' }}
      />
      <Skeleton className="img"
        sx={{ bgcolor: 'grey.900' }}
      />
      <Skeleton className="img"
        sx={{ bgcolor: 'grey.900' }}
      />
      <Skeleton className="img"
        sx={{ bgcolor: 'grey.900' }}
      />
      <Skeleton className="img"
        sx={{ bgcolor: 'grey.900' }}
      />
      <Skeleton className="img"
        sx={{ bgcolor: 'grey.900' }}
      />
    </Box>
  );
}