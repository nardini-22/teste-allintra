import { Skeleton } from './skeleton'
import { TableCell, TableRow } from './table'

const DashboardSkeleton = () => {
  return (
    <>
      <TableRow>
        <TableCell>
          <Skeleton className="h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
        <TableCell>
          <Skeleton className="ml-auto h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
        <TableCell>
          <Skeleton className="ml-auto h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Skeleton className="h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
        <TableCell>
          <Skeleton className="ml-auto h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
        <TableCell>
          <Skeleton className="ml-auto h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Skeleton className="h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
        <TableCell>
          <Skeleton className="ml-auto h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
        <TableCell>
          <Skeleton className="ml-auto h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Skeleton className="h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
        <TableCell>
          <Skeleton className="ml-auto h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
        <TableCell>
          <Skeleton className="ml-auto h-5 w-[50px] sm:w-[70px] bg-background" />
        </TableCell>
      </TableRow>
    </>
  )
}

export default DashboardSkeleton
