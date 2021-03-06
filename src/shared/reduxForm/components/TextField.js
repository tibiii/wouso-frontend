import React from 'react'
import Wrapped from '@material-ui/core/TextField'
import { Collapse, Typography } from '@material-ui/core'

const TextField = ({ input, meta, ...rest }) => {
  const hasError = !!(meta.touched && meta.error)

  return (
    <React.Fragment>
      <Wrapped
        error={hasError}
        {...input}
        {...rest}
        helperText={hasError && meta.error}
      />
      {/* <Collapse in={hasError} unmountOnExit={false}>
        <Typography variant='subheading' color='error'>
          {meta.error}
        </Typography>
      </Collapse> */}
    </React.Fragment>
  )
}

export default TextField
