import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'

import { Text } from '@/components/Text'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  Image,
  Text,
}

type MdxProps = {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
