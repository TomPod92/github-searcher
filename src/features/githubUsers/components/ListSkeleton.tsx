import { Skeleton } from '@mui/material';
import Spacer from 'common/components/Spacer';

const numberOfSkeletons = 10;

interface Props {
  isLoading?: boolean;
}

const ListSkeleton = ({ isLoading }: Props) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Spacer>
      {Array.apply(null, Array(numberOfSkeletons)).map((_, index) => (
        <Skeleton key={index} variant="rectangular" width={'100%'} height={56} />
      ))}
    </Spacer>
  );
};

export default ListSkeleton;
