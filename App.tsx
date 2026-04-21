import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Linking,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [fontsLoaded] = useFonts({ ...Ionicons.font });
  const { width } = useWindowDimensions();
  const isWide = width > 768;

  if (!fontsLoaded) return null;

  const openLink = (url: string) => Linking.openURL(url).catch(() => {});

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#0F0C29', '#302B63', '#24243E']}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={styles.safe}>
        <View style={[styles.container, isWide && styles.containerWide]}>
          {/* Left / Top: Text */}
          <View style={[styles.textBlock, isWide && styles.half]}>
            <View style={styles.badge}>
              <Ionicons name="sparkles" size={14} color="#FFD700" />
              <Text style={styles.badgeText}>جديد • الإصدار 2.0</Text>
            </View>

            <Text style={styles.title}>
              تطبيقك{'\n'}
              <Text style={styles.titleAccent}>بين يديك</Text>
            </Text>

            <Text style={styles.subtitle}>
              تجربة سلسة وسريعة. حمّل التطبيق الآن واستمتع بكل المميزات مجاناً.
            </Text>

            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.storeBtn}
                onPress={() => openLink('https://apps.apple.com')}
                activeOpacity={0.85}
              >
                <Ionicons name="logo-apple" size={28} color="#fff" />
                <View>
                  <Text style={styles.storeSmall}>حمّل من</Text>
                  <Text style={styles.storeBig}>App Store</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.storeBtn}
                onPress={() => openLink('https://play.google.com')}
                activeOpacity={0.85}
              >
                <Ionicons name="logo-google-playstore" size={26} color="#fff" />
                <View>
                  <Text style={styles.storeSmall}>حمّل من</Text>
                  <Text style={styles.storeBig}>Google Play</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.stats}>
              <Stat icon="star" value="4.9" label="تقييم" />
              <View style={styles.divider} />
              <Stat icon="download" value="10K+" label="تحميل" />
              <View style={styles.divider} />
              <Stat icon="people" value="5K+" label="مستخدم" />
            </View>
          </View>

          {/* Right / Bottom: Phone Mockup */}
          <View style={[styles.phoneWrap, isWide && styles.half]}>
            <View style={styles.phone}>
              <View style={styles.notch} />
              <LinearGradient
                colors={['#667eea', '#764ba2']}
                style={styles.screen}
              >
                <View style={styles.screenContent}>
                  <Ionicons name="rocket" size={64} color="#fff" />
                  <Text style={styles.screenTitle}>مرحباً 👋</Text>
                  <Text style={styles.screenSub}>ابدأ رحلتك الآن</Text>

                  <View style={styles.fakeCard}>
                    <View style={styles.fakeDot} />
                    <View style={styles.fakeLines}>
                      <View style={[styles.fakeLine, { width: '80%' }]} />
                      <View style={[styles.fakeLine, { width: '50%' }]} />
                    </View>
                  </View>
                  <View style={styles.fakeCard}>
                    <View style={[styles.fakeDot, { backgroundColor: '#FFD700' }]} />
                    <View style={styles.fakeLines}>
                      <View style={[styles.fakeLine, { width: '70%' }]} />
                      <View style={[styles.fakeLine, { width: '40%' }]} />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>© 2025 • جميع الحقوق محفوظة</Text>
      </SafeAreaView>
    </View>
  );
}

function Stat({ icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <View style={styles.stat}>
      <Ionicons name={icon} size={16} color="#FFD700" />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0F0C29' },
  safe: { flex: 1 },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  containerWide: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 64,
    gap: 40,
  },
  half: { flex: 1 },
  textBlock: { marginBottom: 32 },
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,215,0,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,215,0,0.3)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },
  badgeText: { color: '#FFD700', fontSize: 12, fontWeight: '600' },
  title: {
    fontSize: 44,
    fontWeight: '800',
    color: '#fff',
    lineHeight: 52,
    marginBottom: 16,
  },
  titleAccent: {
    color: '#FFD700',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 24,
    marginBottom: 28,
  },
  buttonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 28,
  },
  storeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#000',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  storeSmall: { color: 'rgba(255,255,255,0.7)', fontSize: 10 },
  storeBig: { color: '#fff', fontSize: 16, fontWeight: '700' },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  stat: { alignItems: 'center' },
  statValue: { color: '#fff', fontSize: 18, fontWeight: '700', marginTop: 2 },
  statLabel: { color: 'rgba(255,255,255,0.6)', fontSize: 11 },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  phoneWrap: { alignItems: 'center', justifyContent: 'center' },
  phone: {
    width: 240,
    height: 460,
    backgroundColor: '#1a1a2e',
    borderRadius: 40,
    padding: 8,
    borderWidth: 2,
    borderColor: '#2a2a3e',
    ...Platform.select({
      ios: {
        shadowColor: '#667eea',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.5,
        shadowRadius: 30,
      },
      android: { elevation: 20 },
      default: {
        // @ts-ignore
        boxShadow: '0 20px 60px rgba(102,126,234,0.5)',
      },
    }),
  },
  notch: {
    position: 'absolute',
    top: 12,
    alignSelf: 'center',
    width: 90,
    height: 22,
    backgroundColor: '#000',
    borderRadius: 12,
    zIndex: 2,
  },
  screen: {
    flex: 1,
    borderRadius: 32,
    overflow: 'hidden',
  },
  screenContent: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  screenTitle: { color: '#fff', fontSize: 24, fontWeight: '800', marginTop: 16 },
  screenSub: { color: 'rgba(255,255,255,0.8)', fontSize: 13, marginBottom: 24 },
  fakeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    padding: 10,
    width: '100%',
    marginTop: 10,
  },
  fakeDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
  },
  fakeLines: { flex: 1, gap: 6 },
  fakeLine: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 3,
  },
  footer: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.4)',
    fontSize: 12,
    paddingVertical: 16,
  },
});
