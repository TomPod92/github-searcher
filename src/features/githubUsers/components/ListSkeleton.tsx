import { Skeleton } from '@mui/material';

const numberOfSkeletons = 10;

interface Props {
  isLoading?: boolean;
}

const ListSkeleton = ({ isLoading }: Props) => {
  if (!isLoading) {
    return null;
  }

  return (
    <>
      {Array.apply(null, Array(numberOfSkeletons)).map((_, index) => (
        <Skeleton key={index} variant="rectangular" width={'100%'} height={56} sx={{ marginBottom: '10px' }} />
      ))}
    </>
  );
};

export default ListSkeleton;
