import React from 'react'
import { 
  Container,
  Typography,
  Grid,
} from '@material-ui/core'
import useStyles from '../components/styles'
import AccountForm from '../components/AccountForm'

function Account() {
  const classes = useStyles()

  return (
    <Container maxWidth={false} classes={{ root: classes.fullContainer }}>
      <Grid container justify="center" classes={{ root: classes.container }}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Grid container justify="space-between" alignItems="center">
                <Typography variant="h5">Mi Cuenta</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AccountForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Account
