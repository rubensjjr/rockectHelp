import { Text, VStack } from 'native-base';
import { Header } from '../components/Header';
import {useRoute} from '@react-navigation/native';

export function Details() {
    type RouteParams ={
        orderId: string;
    }
    const route = useRoute();
    const {orderId} = route.params as RouteParams;
  return (
    <VStack flex={1} bg="gray.700">
        <Header title='solicitação'/>
        <Text color='white'>
            {orderId}
        </Text>
    </VStack>
  );
}