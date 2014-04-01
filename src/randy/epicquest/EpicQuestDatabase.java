package randy.epicquest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class EpicQuestDatabase {

	/*
	 * Create the objects which hold all the info of the quests
	 * 
	 * Everything is built like so:
	 * Quest as Integer = questno
	 * Quest as String 	= questno.taskno
	 * 
	 * Time is in seconds
	 * 
	 */
	
	//Quest
	private static HashMap<Integer, String> questName = new HashMap<Integer, String>();
	private static HashMap<Integer, String> questStartInfo = new HashMap<Integer, String>();
	private static HashMap<Integer, String> questEndInfo = new HashMap<Integer, String>();
	private static HashMap<Integer, ArrayList<String>> questWorlds = new HashMap<Integer, ArrayList<String>>();
	
	//Tasks
	private static HashMap<String, String> questTaskType = new HashMap<String, String>();
	private static HashMap<String, String> questTaskID = new HashMap<String, String>();
	private static HashMap<String, Integer> questTaskAmount = new HashMap<String, Integer>();
	
	//Rewards
	private static HashMap<Integer, Integer> questRewardMoney = new HashMap<Integer, Integer>();
<<<<<<< HEAD
	private static HashMap<Integer, List<String>> questRewardID = new HashMap<Integer, List<String>>();
=======
	private static HashMap<Integer, List<Integer>> questRewardID = new HashMap<Integer, List<Integer>>();
>>>>>>> 8a82a9e34f4bbc9b0780432073f9ac9f1f8fe45e
	private static HashMap<Integer, List<Integer>> questRewardAmount = new HashMap<Integer, List<Integer>>();
	private static HashMap<Integer, String> questRewardRank = new HashMap<Integer, String>();
	
	//Misc
	private static HashMap<Integer, Integer> questResetTime = new HashMap<Integer, Integer>();
	private static HashMap<Integer, ArrayList<Integer>> questLocked = new HashMap<Integer, ArrayList<Integer>>();
	
	/*
	 * 
	 * Getters
	 * 
	 */
	
	/*
	 * Quest functions
	 */
	public static String getQuestName(Integer quest){
		return questName.get(quest);
	}
	
	public static String getQuestStartInfo(Integer quest){
		return questStartInfo.get(quest);
	}
	
	public static String getQuestEndInfo(Integer quest){
		return questEndInfo.get(quest);
	}
	
	public static ArrayList<String> getQuestWorlds(Integer quest){
		return questWorlds.get(quest);
	}
	
	
	/*
	 * Tasks functions
	 */
	public static String getTaskType(Integer quest, Integer task){
		return questTaskType.get(quest+"."+task);
	}
	
	public static String getTaskID(Integer quest, Integer task){
		return questTaskID.get(quest+"."+task);
	}
	
	public static Integer getTaskAmount(Integer quest, Integer task){
		return questTaskAmount.get(quest+"."+task);
	}
	
	public static Integer getTaskTotal(Integer quest){
		int count;
		for(count = 0; questTaskID.containsKey(quest+"."+count); count++){	}
		return count;
	}
	
	/*
	 * Rewards funtions
	 */
	public static Integer getRewardMoney(Integer quest){
		return questRewardMoney.get(quest);
	}
	
<<<<<<< HEAD
	public static List<String> getRewardID(Integer quest){
=======
	public static List<Integer> getRewardID(Integer quest){
>>>>>>> 8a82a9e34f4bbc9b0780432073f9ac9f1f8fe45e
		return questRewardID.get(quest);
	}
	
	public static List<Integer> getRewardAmount(Integer quest){
		return questRewardAmount.get(quest);
	}
	
	public static String getRewardRank(Integer quest){
		return questRewardRank.get(quest);
	}
	
	/*
	 * Misc functions
	 */
	public static Integer getQuestResetTime(Integer quest){
		return questResetTime.get(quest);
	}
	
	public static ArrayList<Integer> getQuestLocked(Integer quest){
		return questLocked.get(quest);
	}
	
	public static Integer getTotalAmountQuests(){
		return questName.size();
	}
	
	/*
	 * 
	 * Setters
	 * 
	 */
	
	/*
	 * Quest functions
	 */
	public static void setQuestName(Integer quest, String name){
		questName.put(quest, name);
	}
	
	public static void setQuestStartInfo(Integer quest, String info){
		questStartInfo.put(quest, info);
	}
	
	public static void setQuestEndInfo(Integer quest, String info){
		questEndInfo.put(quest, info);
	}
	
	public static void setQuestWorlds(Integer quest, ArrayList<String> worlds){
		questWorlds.put(quest, worlds);
	}
	
	
	
	
	/*
	 * Tasks functions
	 */
	public static void setTaskType(Integer quest, Integer task, String type){
		questTaskType.put(quest+"."+task, type);
	}
	
	public static void setTaskID(Integer quest, Integer task, String id){
		questTaskID.put(quest+"."+task, id);
	}
	
	public static void setTaskAmount(Integer quest, Integer task, Integer amount){
		questTaskAmount.put(quest+"."+task, amount);
	}
	
	/*
	 * Rewards funtions
	 */
	public static void setRewardMoney(Integer quest, Integer amount){
		questRewardMoney.put(quest, amount);
	}
	
<<<<<<< HEAD
	public static void setRewardID(Integer quest, List<String> ID){
=======
	public static void setRewardID(Integer quest, List<Integer> ID){
>>>>>>> 8a82a9e34f4bbc9b0780432073f9ac9f1f8fe45e
		questRewardID.put(quest, ID);
	}
	
	public static void setRewardAmount(Integer quest, List<Integer> amount){
		questRewardAmount.put(quest, amount);
	}
	
	public static void setRewardRank(Integer quest, String rank){
		questRewardRank.put(quest, rank);
	}
	
	/*
	 * Misc functions
	 */
	public static void setQuestResetTime(Integer quest, Integer time){
		questResetTime.put(quest, time);
	}
	
	public static void setQuestLocked(Integer quest, String quests){
		
		String[] questString = quests.split(",");
		ArrayList<Integer> questList = new ArrayList<Integer>();
		for(int i = 0; i < questString.length; i++){
			System.out.print("Locked quests of " + quest + ": " + questString[i]);
			questList.add(Integer.parseInt(questString[i]));
		}
		questLocked.put(quest, questList);
	}
}