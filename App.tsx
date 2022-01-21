import { GraphQLClientProvider } from '@app/providers/GraphQLClientProvider'
import Navigation from '@app/navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import useCachedResources from '@app/hooks/useCachedResources'
import useColorScheme from '@app/hooks/useColorScheme'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <GraphQLClientProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </GraphQLClientProvider>
      </SafeAreaProvider>
    )
  }
}
