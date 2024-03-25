import Avatar from 'react-nice-avatar';
import { Attributes, Role, Character, Episode  } from '../configs/interfaces';

export const CharactersList = ({characters , episode} : {characters:Character[], episode: Episode|null}) => {
    return (
        <div className="ui cards">
            {characters.map((character, index) => (
                <div className="card" key={character.name}>
                    <div className="image" >
                        <Avatar style={{ width: '8rem', height: '8rem' }} {...character.imageConfig}  />
                    </div>

                    <div className="content character">
                        <div className="meta">
                            <span>{character.job}</span>
                        </div>
                        <div className="ui fade reveal">
                            <div className="visible content description">
                                    {character.description}
                                    <p>Special Item: {character.specialItem || episode?.mcguffin}</p>

                            </div>
                            <div className="hidden content ">
                                {Object.keys(character.attributes).map((key, index) => (
                                    <div key={`${key}-${index}`}>
                                        <strong>{key}:</strong> d{character.attributes[key as keyof Attributes]}
                                    </div>
                                ))}
                                {Object.keys(character.roles).map((key, index) => (
                                    <div key={`${key}-${index}`}>
                                        <strong>{key}:</strong> d{character.roles[key as keyof Role]}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}