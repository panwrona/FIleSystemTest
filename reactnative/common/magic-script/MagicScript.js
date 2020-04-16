import { AppRegistry } from 'react-native';
import { ReactNativeMagicScript, NativeFileSystem, NativePlaneDetector } from 'magic-script-components-react-native';
import ReactNativeApp from '../react-native/ReactNativeApp';
import { FileSystema, PlaneDetectora } from 'magic-script-components';

const MagicScript = {
    registerApp: (name, appComponent, debug = false) => {
        console.log(`Native File system: ${new NativeFileSystem()}, components file system: ${FileSystema}`);
        console.log(`Native Plane detector: ${new NativePlaneDetector()}, components plane detector: ${PlaneDetectora}`);
        // PlaneDetector.setNativePlaneDetector(new NativePlaneDetector());
        // FileSystem.setNativeFileSystem(new NativeFileSystem());
        AppRegistry.registerComponent(name, () => ReactNativeApp);
        ReactNativeMagicScript.render(appComponent, { name: 'root' }, null, debug);
    }
};

export { MagicScript };
