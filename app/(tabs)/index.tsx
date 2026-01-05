import { Button, View } from 'react-native';
import { signUp } from '../../lib/auth';

export default function HomeScreen() {
  return (
    <View>
      <Button
        title="Test signup"
        onPress={() => signUp('test@example.com', 'password123')}
      />
    </View>
  );
}