    1  whoami
    2  which
    3  dnf install which
    4  clear
    5  echo $0
    6  ls
    7  pwd
    8  cd
    9  pwd
   10  ll
   11  ls
   12  ls -al
   13  ls -al /bin/*sh
   14  cat /etc/passwd
   15  echo $0
   16  echo "xxx"
   17  echo $SHELL
   18  ll /bin
   19  ll
   20  ls -al
   21  echo "alias ll='ls -al'"
   22  echo "alias ll='ls -al'" >> .bashrc 
   23  cat .bashrc
   24  ll
   25  source .bashrc
   26  ll
   27  exit
   28  ll
   29  cd
   30  ll
   31  pwd
   32  which ls
   33  dnf install which -y
   34  ll /bin
   35  ll /bin/
   36  ll /bin
   37  ll /bin/
   38  cal
   39  date
   40  date 
   41  history
   42  cal
   43  cal
   44  clear
   45  dnf install ncurses -y
   46  clear
   47  man clear
   48  echo "세종대왕"
   49  ll
   50  touch test.txt
   51  ll
   52  date
   53  touch data
   54  ll
   55  cat .bashrc
   56  cd -
   57  cd -
   58  head -5 .bashrc 
   59  less -5 .bashrc 
   60  more .bashrc 
   61  ls
   62  ll
   63  ll | more
   64  ll | awk '{print $3}'
   65  mkdir ttt
   66  ll
   67  touch ttt/t.txt
   68  ll ttt
   69  rmdir ttt
   70  rm -rf ttt
   71  ll
   72  mv test.txt ttt.txt
   73  cd /
   74  ll
   75  find . -name cd
   76  whoami
   77  df
   78  df -h
   79  df -k
   80  df -h
   81  du
   82  du *
   83  cd -
   84  ll
   85  du -sh
   86  du -sh *
   87  du -sh * | sort
   88  du -sh * | uniq
   89  du -sh * | sort | uniq
   90  du -sh * | awk '{print $1}' | sort | uniq
   91  du -sh * 
   92  du -sh * | awk '{print $1}' 
   93  du -sh * | awk '{print $1}' | uniq
   94  du -sh * | awk '{print $1}' | sort 
   95  du -sh * | awk '{print $1}' | sort | uniq
   96  for i in a b c; do echo $i; done
   97  for i in `ls`; do echo $i; done
   98  for i in `ls`; do echo $i; du -sh $i; done
   99  for i in `ls`; do echo $i '=>' `du -sh $i`; done
  100  for i in `ls`; do echo $i '=>' `du -sh $i`; echo; done
  101  for i in `ls`; do echo -n $i '=>' `du -sh $i`; done
  102  for i in `ls`; do echo $i '=>' `du -sh $i`; done
  103  for i in `ls`; do du -sh $i; done
  104  free -h
  105  dnf install procps -y
  106  free -h
  107  top
  108  top -H
  109  vmstat
  110  vmstat 1
  111  ps -ef
  112  netstat -an
  113  sar
  114  dnf install sysstat -y
  115  sar -u
  116  sar
  117  sar -u
  118  ll
  119  ln -h
  120  ln -s /usr/bin bin
  121  ll
  122  ll bin
  123  ll bin/
  124  ll
  125  cat /etc/group
  126  groupadd ydp
  127  cat /etc/group
  128  useradd -g ydp jade
  129  cat /etc/passwd
  130  su - jade
  131  whoami
  132  passwd jade
  133  su - jade
  134  su - jade
  135  ll
  136  vi .bash_profile
  137  source .bash_profile
  138  ll
  139  su - jade
  140  ll
  141  dnf install -y shadow-utils
  142  dnf install -y bind-utils
  143  vi zen.txt
  144  cat zen.txt 
  145  grep "quam" *
  146  vi zen.txt
  147  history
  148  vi zen.txt
  149  grep "quam" *
  150  grep "\squam" *
  151  grep "\s*quam" *
  152  grep "\s+quam" *
  153  grep "\squam" *
  154  grep "q[a-z]o" *
  155  grep "[A-Za-z]*m$" *
  156  grep "^S" *
  157  grep "^[a-p]*m" *
  158  grep "^[a-c]*m" *
  159  grep "^[a-c]m" *
  160  grep "^[ac]m" *
  161  grep "^[ac]m*" *
  162  grep "^[ac]" *
  163  grep "^[ac]" zen.txt 
  164  cat zen.txt 
  165  cat zen.txt | awk '{print $1}'
  166  cat zen.txt | awk '{print $1 $3}'
  167  cat zen.txt | awk '{print $1" "$3}'
  168  cat zen.txt | sed 's/P/0/g'
  169  cat zen.txt | sed 's/[LMA]/0/g'
  170  cat zen.txt | sed 's/[LMAP]/0/g'
  171  cat zen.txt | sed 's/[CLMAP]/0/g'
  172  cat zen.txt | sed 's/[CLMAP]/000/g'
  173  vi zen.txt 
  174  vi zen.txt 
  175  dnf install git -y
  176  git config -l
  177  git config -list
  178  git config --list
  179  git config -l
  180  ll
  181  ll .ssh
  182  ssh-keygen -t rsa
  183  ll
  184  ll .ssh
  185  history
  186  cat .ssh/id_rsa.pub 
  187  ll
  188  mkdir workspace
  189  cd workspace/
  190  ll
  191  git clone git@github.com:indiflex/ydp7.git
  192  ll
  193  cd ydp7
  194  ll
  195  echo "ttt" test.txt
  196  echo "ttt" > test.txt
  197  cat test.txt 
  198  git status
  199  git add -A
  200  gi commit -m "first commit"
  201  git commit -m "first commit"
  202  git config --global user.email indiflex.corp@gmail.com
  203  git config --global user.name indiflex
  204  git config -l
  205  git commit -m "first commit"
  206  git branch -a
  207  vi ~/.bash_profile
  208  source ~/.bash_profile
  209  Ps3
  210  git status
  211  git push -u origin master
  212  ll ~/.ssh
  213  vi ~/gacp.sh
  214  ~/gacp.sh
  215  ll ~/gacp.sh
  216  chmod +x ~/gacp.sh 
  217  ll ~/gacp.sh
  218  chmod 754 ~/gacp.sh
  219  ll ~/gacp.sh
  220  ~/gacp.sh 
  221  ~/gacp.sh "asdfdsdfasas"
  222  ~/gacp.sh asdfdsd fasas
  223  ~/gacp.sh 'asdfdsd fasas'
  224  vi ~/gacp.sh
  225  ~/gacp.sh 'asdfdsd fasas'
  226  vi ~/gacp.sh
  227  cat ~/gacp.sh 
  228  echo "ppp" >> test.txt 
  229  cat test.txt 
  230  ~/gacp.sh "append ppp"
  231  vi ~/gacp.sh
  232  git status
  233  ~/gacp.sh "append ppp"
  234  pwd
  235  cd ~
  236  pwd
  237  ll
  238  vi .bash_profile 
  239  source .bash_profile 
  240  Ps3
  241  cd workspace/ydp7/
  242  echo 'rrr' >> test.txt 
  243  gacp "append rrr"
  244  which gacp
  245  cat /root/gacp.sh
  246  history > t
