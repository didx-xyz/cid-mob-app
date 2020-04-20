import * as React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from './Checkbox';

export default function StyledCheckboxSelection({
   children, horizontal, multi, selectedValues, setSelectedValues, ...props
}) {
   const indexes = [];
   for (let i = 0; i < children.length; i += 1) {
      if (children[i].selected) {
         indexes.push(i);
      }
   }
   const [selectedIndexes, setSelectedIndexes] = React.useState(indexes);
   const { colors, sizes } = useTheme();

   const styles = {
      container: {
         flexDirection: 'row',
         flexWrap: 'wrap',
         paddingLeft: 10,
         paddingRight: 10,
      },
   };

   return (
      <View
         {...props}
         style={[styles.container, props.style]}
      >
         {children.map((x, i) => (
            <Checkbox
               key={x.value}
               index={i}
               label={x.label}
               value={x.value}
               selectedValues={selectedValues}
               setSelectedValues={setSelectedValues}
               horizontal={horizontal}
               multi={multi}
            />
         ))}
      </View>
   );
}
