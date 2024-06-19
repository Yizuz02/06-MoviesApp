import { Text, View } from "react-native"
import { FullMovie } from "../../../core/entities/movie.entity"
import { Formatter } from "../../../config/helpers/formatter";
import { Cast } from "../../../core/entities/cast.entity";
import { FlatList } from "react-native-gesture-handler";
import { CastActor } from "../cast/CastActor";

interface Props {
    movie:  FullMovie;
    cast: Cast[];
}

export const MovieDetails = ({movie, cast}:Props) => {
  return (
    <>
        <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Text>{movie.rating}</Text>
                <View style={{marginLeft:5}}>
                    <Text>
                    -   {movie.genres.join(', ')}
                    </Text>
                </View>
            </View>
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                Historia
            </Text>
            <Text style={{fontSize:16}}>
                {movie.description}
            </Text>
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                Presupueto
            </Text>
            <Text style={{fontSize:16}}>
                {Formatter.currency(movie.budget)}
            </Text>
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20}}>
                Actores
            </Text>
            <FlatList 
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsVerticalScrollIndicator={false}
                renderItem={({item})=><CastActor actor={item}/>}
            />
        </View>
       
    </>
  )
}