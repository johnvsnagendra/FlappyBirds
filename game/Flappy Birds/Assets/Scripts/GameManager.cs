using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    // Start is called before the first frame update
    public float GameDelay = 1f;

    bool gameHasEnded = false;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void EndGame() {

        if (!gameHasEnded)
        {
            gameHasEnded = true;
            Debug.Log("Game Over");
            //Invoke("Restart", GameDelay);
        }
    }
    public void StartGame()
    {
        SceneManager.LoadScene(1);
    }

    public void Restart()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }

    public void MainMenu()
    {
        SceneManager.LoadScene(0); ;
        

    }

    public void Quit()
    {
        Application.Quit();
    }
}
