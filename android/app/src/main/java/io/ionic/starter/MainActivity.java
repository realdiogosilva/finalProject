package io.ionic.starter;
import com.heumangkumar.capacitorgooglemaps.CapacitorGoogleMaps;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        registerPlugin(CapacitorGoogleMaps.class);
    }
}
