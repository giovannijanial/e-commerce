import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useCart } from '../../hooks/useCart';
import { Fragment, useEffect, useState } from 'react';

export default function DashRecentEntries() {
  const { getAll, carts, loading } = useCart();
  const [totalEntries, setTotalEntries] = useState(0);
  const [date, setDate] = useState<Date>();

  const now = new Date();

  useEffect(() => {
    let totalEntries = 0;
    getAll();

    for (const cart of carts) {
      totalEntries += cart.total;
    }
    setTotalEntries(totalEntries)
    setDate(now);
  }, [getAll, carts])


  return (
    <Fragment>
      <Title>Recent Entries</Title>
      <Typography component="p" variant="h4">
        R${totalEntries.toFixed(2)}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {date?.toLocaleDateString()}
      </Typography>
      <div>
        <Link color="primary" href="#">
          View balance
        </Link>
      </div>
    </Fragment>
  );
}