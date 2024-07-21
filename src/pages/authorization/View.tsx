import React from 'react'
import { Button, Center, Container, Divider, rem, Stack } from '@mantine/core'
import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled
} from '@tabler/icons-react'
import {
  AnimatePresence,
  motion,
  MotionConfig,
  Transition,
  Variants
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

  const googleIcon = (
    <IconBrandGoogleFilled style={{ width: rem(24), height: rem(24) }} />
  )
  const githubIcon = (
    <IconBrandGithubFilled style={{ width: rem(24), height: rem(24) }} />
  )

  return (
    <Center
      style={{
        minHeight: '100svh',
        maxHeight: '100svh',
        minWidth: '100svw',
        overflowX: 'hidden'
      }}
    >
      <Stack>
        <MotionConfig reducedMotion="user">
          <AnimatePresence mode="popLayout">
            {step === 'register' && (
              <Stack
                key="register"
                style={{ overflowX: 'hidden' }}
              >
                <motion.h1
                  transition={transition}
                  variants={variantsLeft}
                  initial="initial"
                  exit="initial"
                  animate="animate"
                >
                  Register
                </motion.h1>
                <motion.div
                  transition={transition}
                  variants={variantsRight}
                  initial="initial"
                  exit="initial"
                  animate="animate"
                >
                  <RegisterForm />
                </motion.div>
                <Button
                  component={motion.button}
                  variant="subtle"
                  size="sm"
                  onClick={handleSwapStep}
                  transition={transition}
                  variants={variantsLeft}
                  initial="initial"
                  exit="initial"
                  animate="animate"
                >
                  {SWAP_STEP_MAP[step].label}
                </Button>
              </Stack>
            )}
            {step === 'login' && (
              <Stack
                key="login"
                style={{ overflowX: 'hidden' }}
              >
                <motion.h1
                  transition={transition}
                  variants={variantsRight}
                  initial="initial"
                  exit="initial"
                  animate="animate"
                >
                  Login
                </motion.h1>
                <motion.div
                  transition={transition}
                  variants={variantsLeft}
                  initial="initial"
                  exit="initial"
                  animate="animate"
                >
                  <LoginForm />
                </motion.div>
                <Button
                  component={motion.button}
                  variant="subtle"
                  size="sm"
                  onClick={handleSwapStep}
                  transition={transition}
                  variants={variantsRight}
                  initial="initial"
                  exit="initial"
                  animate="animate"
                >
                  {SWAP_STEP_MAP[step].label}
                </Button>
              </Stack>
            )}
          </AnimatePresence>
        </MotionConfig>
        <Divider />
        <Stack>
          <Button
            size="md"
            variant="light"
            leftSection={googleIcon}
          >
            continue with google
          </Button>
          <Button
            size="md"
            variant="light"
            leftSection={githubIcon}
          >
            continue with github
          </Button>
        </Stack>
      </Stack>
    </Center>
  )
}

const variantsRight: Variants = {
  initial: { x: '150%' },
  animate: { x: 0 }
}

const variantsLeft: Variants = {
  initial: { x: '-150%' },
  animate: { x: 0 }
}

const transition: Transition = {
  x: { type: 'spring', stiffness: 300, damping: 20 }
}

export default View
