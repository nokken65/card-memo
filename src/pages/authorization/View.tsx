import React from 'react'
import { Button, Center, Container, Divider, Stack, Title } from '@mantine/core'
import {
  AnimatePresence,
  motion,
  MotionConfig,
  Transition
} from 'framer-motion'

import { LoginForm, RegisterForm } from '@/features/authorize/ui'

type Step = 'register' | 'login'

const SWAP_STEP_MAP: Record<Step, { label: string; toStep: () => Step }> = {
  register: {
    label: 'Already have an account? Login',
    toStep: () => 'login'
  },
  login: {
    label: "Don't have an account? Register",
    toStep: () => 'register'
  }
}

const View = () => {
  const [step, setStep] = React.useState<Step>('login')

  const handleSwapStep = () => setStep(SWAP_STEP_MAP[step].toStep())

  return (
    <Center
      style={{
        minHeight: '100svh',
        maxHeight: '100svh',
        minWidth: '100svw',
        overflowX: 'hidden'
      }}
    >
      <MotionConfig reducedMotion="user">
        <AnimatePresence mode="popLayout">
          {step === 'register' && (
            <Container
              key="register"
              style={{ overflowX: 'hidden' }}
            >
              <Stack>
                <motion.h1
                  transition={transition}
                  initial={{ x: '-150%' }}
                  exit={{ x: '-150%' }}
                  animate={{ x: 0 }}
                >
                  Register
                </motion.h1>
                <motion.div
                  transition={transition}
                  initial={{ x: '150%' }}
                  exit={{ x: '150%' }}
                  animate={{ x: 0 }}
                >
                  <RegisterForm />
                </motion.div>
                <Button
                  component={motion.button}
                  variant="subtle"
                  size="sm"
                  onClick={handleSwapStep}
                  transition={transition}
                  initial={{ x: '-150%' }}
                  exit={{ x: '-150%' }}
                  animate={{ x: 0 }}
                >
                  {SWAP_STEP_MAP[step].label}
                </Button>
              </Stack>
            </Container>
          )}
          {step === 'login' && (
            <Container
              key="login"
              style={{ overflowX: 'hidden' }}
            >
              <Stack>
                <motion.h1
                  transition={transition}
                  initial={{ x: '150%' }}
                  exit={{ x: '150%' }}
                  animate={{ x: 0 }}
                >
                  Login
                </motion.h1>
                <motion.div
                  transition={transition}
                  initial={{ x: '-150%' }}
                  exit={{ x: '-150%' }}
                  animate={{ x: 0 }}
                >
                  <LoginForm />
                </motion.div>
                <Button
                  component={motion.button}
                  variant="subtle"
                  size="sm"
                  onClick={handleSwapStep}
                  transition={transition}
                  initial={{ x: '150%' }}
                  exit={{ x: '150%' }}
                  animate={{ x: 0 }}
                >
                  {SWAP_STEP_MAP[step].label}
                </Button>
              </Stack>
            </Container>
          )}
        </AnimatePresence>
      </MotionConfig>
    </Center>
  )
}

const transition: Transition = {
  x: { type: 'spring', stiffness: 300, damping: 20 }
}

export default View
