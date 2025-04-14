

import { SerializeClass, SerializeData } from "../../../modules/base/SerializeClass";
import { TimeUtility } from "../Utility/TimeUtility";

/// AVG
export class AVGData extends SerializeClass {
    __className:string = "AVGData";

    // ===========  ===========

    @SerializeData() // id
    sceneEnterCount: Map<number,number> = new Map();

    @SerializeData() // id+id
    EventStoryState: Map<string,boolean> = new Map();
    @SerializeData()
    EventGameState: Map<string,boolean> = new Map();

}

